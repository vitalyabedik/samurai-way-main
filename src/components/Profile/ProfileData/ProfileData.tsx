import React from 'react';
import styles from '../ProfileData/ProfileData.module.css';
import {ProfileType} from '../../../types';
import {ProfileContact} from '../ProfileContact';

import iconAboutMe from '../../../assets/images/profile/about/icon-heart.svg';
import iconSkills from '../../../assets/images/profile/about/icon-skills.svg';
import iconContacts from '../../../assets/images/profile/about/icon-rss.svg';
import iconFacebook from '../../../assets/images/profile/about/icon-facebook.svg';
import iconLooking from '../../../assets/images/profile/about/icon-looking.svg';
import iconVK from '../../../assets/images/profile/about/icon-vk.svg';
import iconInstagram from '../../../assets/images/profile/about/icon-instagram.svg';
import iconYoutube from '../../../assets/images/profile/about/icon-youtube.svg';
import website from '../../../assets/images/profile/about/icon-globe.svg';
import iconTwitter from '../../../assets/images/profile/about/icon-twitter.svg';
import iconGithub from '../../../assets/images/profile/about/icon-github.svg';
import iconMainlink from '../../../assets/images/profile/about/icon-mainLink.svg';

type ProfileInfoIcons = {
    [key: string]: string | undefined;
};

type PropsType = {
    profile: ProfileType | null;
    isOwner: boolean;
    activateEditMode: () => void;
};

export const ProfileData = (props: PropsType) => {
    const profileInfoIcons: ProfileInfoIcons = {
        aboutMe: iconAboutMe,
        lookingForAJob: iconLooking,
        lookingForAJobDescription: iconSkills,
        contacts: iconContacts,
        facebook: iconFacebook,
        website: website,
        vk: iconVK,
        twitter: iconTwitter,
        instagram: iconInstagram,
        youtube: iconYoutube,
        github: iconGithub,
        mainLink: iconMainlink,
    };

    const {profile, isOwner, activateEditMode} = props;

    const onActivateEditModeHandler = () => {
        activateEditMode();
    };

    return (
        <div className={styles.root}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={profileInfoIcons.aboutMe} alt="aboutMe-icon"/>
                    </div>
                    <div>About me:</div>
                    <div className={styles.info}>{profile?.aboutMe}</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={profileInfoIcons.lookingForAJob}
                             alt="lookingForAJob-icon"/>
                    </div>
                    <div>Looking for a job:</div>
                    <div className={styles.info}>{profile?.lookingForAJob ? 'Yes': 'No'}</div>
                </li>
                {profile?.lookingForAJobDescription && (
                    <li className={styles.item}>
                        <div className={styles.iconBlock}>
                            <img
                                className={styles.iconImage}
                                src={profileInfoIcons.lookingForAJobDescription}
                                alt="lookingForAJobDescription-icon"
                            />
                        </div>
                        <div>Skills:</div>
                        <div className={styles.info}>{profile?.lookingForAJobDescription}</div>
                    </li>
                )}
                {profile?.contacts && (
                    <li className={styles.contacts}>
                        <div className={styles.item}>
                            <div className={styles.iconBlock}>
                                <img className={styles.iconImage} src={profileInfoIcons.contacts} alt="contacts-icon"/>
                            </div>
                            <div>Contacts:{Object.values(profile.contacts).every(value => !value) &&
                                <b> No contacts</b>}</div>
                        </div>
                        <div>
                            <ul className={styles.contact}>
                                {Object.entries(profile.contacts).map(([key, value]) =>
                                    value &&
                                    <ProfileContact key={key} title={key} value={value} icon={profileInfoIcons[key]}/>)}
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
            {isOwner && <button className={styles.editButton} onClick={onActivateEditModeHandler}>Edit</button>}
        </div>
    );
};