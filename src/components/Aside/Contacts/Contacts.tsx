import styles from './Contacts.module.css';

import {UsersType} from '../../../types';

type PropsType = {
    contacts: UsersType
}

export const Contacts = (props: PropsType) => {
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>Contacts</h3>
            <ul className={styles.items}>
                {props.contacts.map(contact => {
                    return (
                        <li key={contact.id} className={styles.item}>
                            {/*<NavLink to="/profile" className={styles.item__link}*/}
                            {/*         activeClassName={styles.item__link_active}>*/}
                                <div className={styles.item__image}>
                                    <img className={styles.item__avatar} src={contact.avatar} alt="contact-avatar"/>
                                </div>
                                <span className={styles.item__userName}>{`${contact.userFirstName} ${contact.userLastName}`}</span>
                            {/*</NavLink>*/}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}