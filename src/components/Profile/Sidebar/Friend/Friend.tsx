import React from 'react';

import styles from './Friend.module.css';

import {UserType} from '../../../../types/usersTypes';

type PropsType = {
    friend: UserType
}

export const Friend = (props: PropsType) => {
    const {friend} = props

    return (
        <>
            <li key={friend.id}>
                <div className={styles.item}>
                    <img className={styles.img} src={friend.avatar} alt="avatar-friend"/>
                    <span className={styles.userName}>
                                    {`${friend.userFirstName} ${friend.userLastName}`}
                    </span>
                </div>
            </li>
        </>
    );
};

