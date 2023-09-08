import React from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import styles from './ProfileDataForm.module.css';
import s from '../../Login/Login.module.css'

import homeIcon from '../../../assets/images/profile/about/icon-home.svg';
import {ProfileType} from '../../../types';
import {createField, GetStringKeys, Input, Textarea} from '../../common/FormsControls';
import {ProfileContact} from '../ProfileContact';

type PropsType = {
    profile: ProfileType | null
    onSubmit: (formData: ProfileDataFormType) => void
}

// export type ProfileDataFormType = {
//     fullName: string
//     lookingForAJob: string
//     lookingForAJobDescription: string
//     aboutMe: string
// }

export type ProfileDataFormType = {
    fullName: string;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    contacts: {
        facebook: string;
        vk: string;
        instagram: string;
        github: string;
    }

}
type ProfileDataFormValuesTypeKeys = GetStringKeys<ProfileDataFormType>;
type AllSampleFormProps = PropsType & InjectedFormProps<ProfileDataFormType, PropsType>;

const ProfileDataForm: React.FC<AllSampleFormProps> = (props) => {
    const {profile, handleSubmit, error} = props

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.root}>
                <div className={styles.formItems}>
                    <div>
                        <b>Full name</b>: {profile?.lookingForAJob}
                        {createField<ProfileDataFormValuesTypeKeys>('Full name', 'fullName', [], Input)}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {profile?.lookingForAJob ? 'yes' : 'no'}
                        {createField<ProfileDataFormValuesTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                    </div>
                    <div>
                        <b>My professional skills</b>: {profile?.lookingForAJobDescription}
                        {createField<ProfileDataFormValuesTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                    </div>
                    <div>
                        <b>About me</b>: {profile?.aboutMe}
                        {createField<ProfileDataFormValuesTypeKeys>('About me', 'aboutMe', [], Textarea)}
                    </div>
                    {profile?.contacts &&
                        <div className={styles.contacts}>
                            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                            return <div key={key}>
                                <b>{key}</b>: {createField(key, 'contacts.' + key, [], Input)}
                            </div>
                        })}
                        </div>
                    }
                </div>
                <button className={styles.saveButton}>Save</button>
                {error && <div className={s.formSummaryError}>
                    {error}
                </div>}
            </div>
        </form>
    );
};

export default reduxForm<ProfileDataFormType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

// export default ProfileDataFormReduxForm;

// const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({
//     form: "edit-profile",
// })(ProfileDataForm);
//
// export default ProfileDataFormReduxForm;