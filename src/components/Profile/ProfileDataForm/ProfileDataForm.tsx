import React from 'react';
import styles from '../ProfileData/ProfileData.module.css';
import homeIcon from '../../../assets/images/profile/about/icon-home.svg';
import {ProfileType} from '../../../types';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField, GetStringKeys, Input, Textarea} from '../../common/FormsControls';

type PropsType = {
    profile: ProfileType | null
    onSubmit: (formData: ProfileDataFormType) => void
}

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: string
    lookingForAJobDescription: string
    aboutMe: string
}
type ProfileDataFormValuesTypeKeys = GetStringKeys<ProfileDataFormType>;
type AllSampleFormProps = PropsType & InjectedFormProps<ProfileDataFormType, PropsType>;

export const ProfileDataForm:React.FC<AllSampleFormProps> = (props) => {
    const {profile, handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            <div>
                <b>Full name</b>: {profile?.lookingForAJob}
                {createField<ProfileDataFormValuesTypeKeys>('Full name', 'fullName', [], Input) }
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
        </form>
    );
};

const ProfileDataFormReduxForm = reduxForm<ProfileDataFormType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;