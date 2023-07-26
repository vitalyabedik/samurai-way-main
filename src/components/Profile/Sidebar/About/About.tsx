import {useState} from 'react';

import styles from './About.module.css';

import {AboutType, ProfileType} from '../../../../types/profilePageTypes';
import {ProfileData} from '../../ProfileData';
// import {ProfileDataFormType} from '../../ProfileDataForm';
import ProfileDataForm, {ProfileDataFormType} from '../../ProfileDataForm/ProfileDataForm';
import {Preloader} from '../../../common';


type PropsType = {
    about: AboutType[]
    profile: ProfileType | null
    isOwner: boolean
    updateProfile: (profile: ProfileDataFormType) => Promise<any>
}

export const About = (props: PropsType) => {
    const {profile, isOwner, updateProfile} = props


    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData: ProfileDataFormType) => {
        updateProfile(formData)
            .then(() => setEditMode(false))

    }

    if (!profile) {
        return <Preloader />;
    }
    return (
        <div className={styles.root}>
            <h4 className={styles.sidebar__title}>About</h4>
            {
                editMode
                    ? <ProfileDataForm
                        profile={profile}
                        onSubmit={onSubmit}
                        // initialValues={profile}
                    />
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   activateEditMode={activateEditMode}
                    />
            }
        </div>
    )
}

