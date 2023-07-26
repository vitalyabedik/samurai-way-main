import React from 'react';
import styles from '../ProfileData/ProfileData.module.css';
import homeIcon from '../../../assets/images/profile/about/icon-home.svg';
import {ProfileType} from '../../../types';
import {Contact} from '../ProfileContact';

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    activateEditMode: () => void
}

export const ProfileData = (props: PropsType) => {
    const {profile, isOwner, activateEditMode} = props

    const onActivateEditModeHandler = () => {
        activateEditMode()
    }

    return (
        <>
            <div>
                {isOwner && <button onClick={onActivateEditModeHandler}>edit</button>}
            </div>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={homeIcon} alt="home-icon"/>
                    </div>
                    <div>Looking for a job:</div>
                    <div className={styles.info}>{!profile?.lookingForAJob ? profile?.lookingForAJob : 'No'}</div>
                </li>
                {profile?.lookingForAJob && <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={homeIcon} alt="home-icon"/>
                    </div>
                    <div>Looking for a job:</div>
                    <div className={styles.info}>{profile?.lookingForAJobDescription}</div>
                </li>}
                {profile?.contacts.facebook && <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={homeIcon} alt="home-icon"/>
                    </div>
                    <div>facebook:</div>
                    <div className={styles.info}>{profile?.contacts.facebook}</div>
                </li>}
                <li>
                    <b>About me</b>: {profile?.aboutMe}
                </li>
                {profile?.contacts && <li>
                    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} title={key} value={profile.contacts[key]}/>
                })}
                </li>}
            </ul>
        </>
    );
};

