import {NavLink} from 'react-router-dom';

import styles from './DialogItem.module.css'

type PropsType = {
    id: number
    name: string
}

export const DialogItem = (props: PropsType) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={styles.dialog__item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


