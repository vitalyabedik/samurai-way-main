import React from 'react';

import styles from './AvatarAndFullName.module.css';

import defaultUserPhoto from '../../../assets/images/users/default-user.png';

type PropsType = {
    image: string | null
    fullName: string | null
}

export const AvatarAndFullName = (props: PropsType) => {
    const {image, fullName} = props

    return (
        <div className={styles.user}>
            <div className={styles.user__image}>
                <img className={styles.user__avatar} src={image || defaultUserPhoto} alt="user-avatar"/>
            </div>
            <span className={styles.user__Name}>{fullName}</span>
        </div>
    );
};

