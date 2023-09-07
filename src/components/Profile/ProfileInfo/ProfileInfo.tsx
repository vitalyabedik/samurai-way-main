import React, {ChangeEvent} from 'react';

import styles from './ProfileInfo.module.css';

import profileCover from '../../../assets/images/profile/profile-cover.jpg';
import {Preloader} from '../../common';
import {ProfileType} from '../../../types';
import {ProfileStatusWithHooks} from './ProfileStatus/ProfileStatusWithHooks';
import defaultUserPhoto from '../../../assets/images/users/default-user.png'
import editIcon from '../../../assets/images/profile/icon-edit.svg'

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
                    {isOwner &&
                        <label htmlFor="mainPhotoInput" className={styles.fileInputLabel}>
                            <input
                                id="mainPhotoInput"
                                type="file"
                                onChange={onMainPhotoSelected}
                                className={styles.fileInput}
                            />
                            <img className={styles.fileInputIcon} src={editIcon} alt='edit-icon'/>
                        </label>
                    }

                    <div className={styles.userStatus}></div>
                </div>
                <div className={styles.profileInfo}>
                    <h1 className={styles.profileInfo__title}>{profile.fullName}</h1>
                    <p className={styles.profileInfo__description}>{profile.aboutMe}</p>
                    <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
                </div>
            </div>
        </div>
    )
}