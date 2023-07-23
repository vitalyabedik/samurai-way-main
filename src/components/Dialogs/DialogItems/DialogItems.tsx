import {NavLink} from 'react-router-dom';

import styles from './DialogItems.module.css'
import {UserType} from '../../../types';

type PropsType = {
    id: number
    dialog: UserType
}

export const DialogItems = (props: PropsType) => {
    const {id, dialog} = props

    let path = `/dialogs/${id}`

    return (
        <div className={styles.root}>
            <NavLink key={dialog.id} to={path}>
                <li className={styles.item}>
                    <div className={styles.item__image}>
                        <img className={styles.item__avatar} src={dialog.avatar} alt="contact-avatar"/>
                    </div>
                    <div className={styles.userAndMessage}>
                        <div className={styles.item__userName}>
                            {`${dialog.userFirstName} ${dialog.userLastName}`}
                        </div>
                        <div className={styles.userMessage}>
                            'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore'
                        </div>
                    </div>
                </li>
            </NavLink>
        </div>
    )
}


