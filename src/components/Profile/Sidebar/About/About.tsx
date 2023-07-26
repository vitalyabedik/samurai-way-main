import {useState} from 'react';

import styles from './About.module.css';

import {AboutType, ProfileType} from '../../../../types/profilePageTypes';
import {ProfileData} from '../../ProfileData';
import {ProfileDataFormType} from '../../ProfileDataForm';
import ProfileDataFormReduxForm from '../../ProfileDataForm/ProfileDataForm';


type PropsType = {
    about: AboutType[]
    profile: ProfileType | null
    isOwner: boolean
}

export const About = (props: PropsType) => {
    const {profile, isOwner} = props

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData: ProfileDataFormType) => {
        console.log(formData)
    }


    return (
        <div className={styles.root}>
            <h4 className={styles.sidebar__title}>About</h4>
            {
                !editMode
                    ? <ProfileDataFormReduxForm  profile={profile}
                                       onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   activateEditMode={activateEditMode}
                    />
            }
        </div>
    )
}

