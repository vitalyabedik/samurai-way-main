import {NavLink} from 'react-router-dom';

import styles from './Dialogs.module.css'

export const Dialogs = (props: any) => {
    return (
        <div className={styles.root}>
            <div className={styles.dialogs}>
                <div className={styles.dialogs__items}>
                    <div className={styles.dialog__item}>
                        <NavLink to="/dialogs/1">Vitali</NavLink>
                    </div>
                    <div className={styles.dialog__item}>
                        <NavLink to="/dialogs/2">Natasha</NavLink>
                    </div>
                    <div className={styles.dialog__item}>
                        <NavLink to="/dialogs/3">Gena</NavLink>
                    </div>
                    <div className={styles.dialog__item}>
                        <NavLink to="/dialogs/4">Larisa</NavLink>
                    </div>
                    <div className={styles.dialog__item}>
                        <NavLink to="/dialogs/5">Valera</NavLink>
                    </div>
                    <div className={styles.dialog__item}>
                        <NavLink to="/dialogs/6">Vlad</NavLink>
                    </div>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.messages__items}>
                    <div className={styles.message__item}>
                        Hi
                    </div>
                    <div className={styles.message__item}>
                        Hello
                    </div>
                    <div className={styles.message__item}>
                        How are you?
                    </div>
                    <div className={styles.message__item}>
                        What happened?
                    </div>
                    <div className={styles.message__item}>
                        How can i do it?
                    </div>
                    <div className={styles.message__item}>
                        i am ok.
                    </div>
                </div>
            </div>
        </div>
    )
}