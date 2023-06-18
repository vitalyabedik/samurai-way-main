import React from 'react';

import styles from './ProfileInfo.module.css';

import profileCover from '../../../assets/images/profile/profile-cover.jpg';
import {Preloader} from '../../common';
import {ProfileType} from '../../../types';

type PropsType = {
    profile: ProfileType | null
}

export const ProfileInfo: React.FC<PropsType> = (props) => {
    const {profile} = props

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.root}>
            <div >
                <img className={styles.profileCover} src={profileCover} alt="profile-cover"/>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.profileAvatar}>
                    <img className={styles.profileAvatar__img} src={profile.photos.large} alt="profile-avatar-8"/>
                    <div className={styles.userStatus}></div>
                </div>
                <div className={styles.profileInfo}>
                    <h1 className={styles.profileInfo__title}>{profile.fullName}</h1>
                    <p className={styles.profileInfo__description}>{profile.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}