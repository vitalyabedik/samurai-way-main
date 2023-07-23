import React from 'react';

import styles from './Contact.module.css';
import {UserType} from '../../../types';

type PropsType = {
    contact: UserType
}

export const Contact = (props: PropsType) => {
    const {contact} = props

    return (
        <>
            <li key={contact.id} className={styles.item}>
                {/*<NavLink to="/profile" className={styles.item__link}*/}
                {/*         activeClassName={styles.item__link_active}>*/}
                <div className={styles.item__image}>
                    <img className={styles.item__avatar} src={contact.avatar} alt="contact-avatar"/>
                </div>
                <span
                    className={styles.item__userName}>{`${contact.userFirstName} ${contact.userLastName}`}</span>
                {/*</NavLink>*/}
            </li>
        </>
    );
};

