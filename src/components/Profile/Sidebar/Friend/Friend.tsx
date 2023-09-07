import React from 'react';

import styles from './Friend.module.css';
import {UserType} from '../../../../types/usersPageTypes';
import defaultUserPhoto from '../../../../assets/images/users/default-user.png';

type PropsType = {
    friend: UserType
}

export const Friend = (props: PropsType) => {
    const {friend} = props

    return (
        <>
            <li key={friend.id}>
                <div className={styles.item}>
                    <img className={styles.img} src={friend.photos.large || defaultUserPhoto} alt="avatar-friend"/>
                    <span className={styles.userName}>
                        {friend.name}
                    </span>
                </div>
            </li>
        </>
    );
};

