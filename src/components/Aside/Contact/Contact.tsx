import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Contact.module.css';

import {UserType} from '../../../types/usersPageTypes';
import defaultUserPhoto from '../../../assets/images/users/default-user.png';

type PropsType = {
    contact: UserType
}

export const Contact = (props: PropsType) => {
    const {contact} = props

    return (
        <>
            <li key={contact.id} className={styles.item}>
                <NavLink to={`/profile/${contact.id}`} className={styles.item__link}
                         activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img className={styles.item__avatar} src={contact.photos.large || defaultUserPhoto}
                             alt="contact-avatar"/>
                    </div>
                    <span
                        className={styles.item__userName}>{contact.name}</span>
                </NavLink>
            </li>
        </>
    );
};

