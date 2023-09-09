import styles from './Contacts.module.css';

import {Contact} from '../Contact';
import {UserType} from '../../../types/usersPageTypes';

type PropsType = {
    contacts: UserType[]
}

export const Contacts = (props: PropsType) => {
    const {contacts} = props

    return (
        <div className={styles.root}>
            <h3 className={styles.title}>Contacts</h3>
            <ul className={styles.items}>
                {contacts.map(contact =>
                    <Contact key={contact.id} contact={contact}/>
                )}
            </ul>
        </div>
    )
}