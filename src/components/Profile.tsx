import React from 'react';

import styles from './Profile.module.css';

import profileBackground from '../assets/images/profile-background.png';


export const Profile: React.FC = () => {
    return (
        <main className={styles.root}>
            <div className={styles.profile}>
                <img src={profileBackground} alt="profile-background"/>
                <div>avatar + descr</div>
                <div>My posts</div>
                <div>New post</div>
                <div className={styles.items}>
                    <div className={styles.item}>Post1</div>
                    <div className={styles.item}>Post2</div>
                </div>
            </div>
        </main>
    )
}