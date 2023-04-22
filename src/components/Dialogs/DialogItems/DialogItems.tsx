import {NavLink} from 'react-router-dom';

import styles from './DialogItems.module.css'
import {UserType} from '../../../types';

type PropsType = {
    id: number
    dialog: UserType
}

export const DialogItems = (props: PropsType) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={styles.root}>
            <NavLink key={props.dialog.id} to={path}>
                <li className={styles.item}>
                    <div className={styles.item__image}>
                        <img className={styles.item__avatar} src={props.dialog.avatar} alt="contact-avatar"/>
                    </div>
                    <div className={styles.userAndMessage}>
                        <div className={styles.item__userName}>
                            {`${props.dialog.userFirstName} ${props.dialog.userLastName}`}
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


