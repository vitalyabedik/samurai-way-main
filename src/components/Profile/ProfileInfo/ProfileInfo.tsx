import React, {ChangeEvent} from 'react';

import styles from './ProfileInfo.module.css';

import profileCover from '../../../assets/images/profile/profile-cover.jpg';
import {Preloader} from '../../common';
import {ProfileType} from '../../../types';
import {ProfileStatus} from './ProfileStatus';
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';
import defaultUserPhoto from '../../../assets/images/users/default-user.png'

type PropsType = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
}

export const ProfileInfo = (props: PropsType) => {
    const {profile, status, isOwner, updateUserStatus, savePhoto} = props

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && savePhoto(e.target.files[0])
    }

    return (
        <div className={styles.root}>
            <div >
                <img className={styles.profileCover} src={profileCover} alt="profile-cover"/>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.profileAvatar}>
                    <img className={styles.profileAvatar__img} src={profile.photos.large || defaultUserPhoto} alt="profile-avatar-8"/>
                    {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                    <div className={styles.userStatus}></div>
                </div>
                <div className={styles.profileInfo}>
                    <h1 className={styles.profileInfo__title}>{profile.fullName}</h1>
                    <p className={styles.profileInfo__description}>{profile.aboutMe}</p>
                    {/*<ProfileStatus status={status} updateUserStatus={updateUserStatus}/>*/}
                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
                </div>
            </div>
        </div>
    )
}