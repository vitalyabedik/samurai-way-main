import styles from './Contacts.module.css';

import {UsersType} from '../../../types';
import {Contact} from '../Contact';

type PropsType = {
    contacts: UsersType
}

export const Contacts = (props: PropsType) => {
    const {contacts} = props

    return (
        <div className={styles.root}>
            <h3 className={styles.title}>Contacts</h3>
            <ul className={styles.items}>
                {contacts.map(contact =>
                    <Contact key={contact.id} contact={contact}/>
                )
                }
            </ul>
        </div>
    )
}