import React from 'react';

import styles from './Profile.module.css';

import profileBackground from '../../assets/images/profile-background.png';

import {Posts} from './Posts/Posts';


export const Profile: React.FC = () => {
    return (
        <main className={styles.root}>
            <div className={styles.profile}>
                <img src={profileBackground} alt="profile-background"/>
                <div>avatar + descr</div>
                <Posts/>
            </div>
        </main>
    )
}