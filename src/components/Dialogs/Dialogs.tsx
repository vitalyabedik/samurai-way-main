import {NavLink} from 'react-router-dom';

import styles from './Dialogs.module.css'

type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={styles.dialog__item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageItemPropsType = {
    message: string
}

const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={styles.message__item}>
            {props.message}
        </div>
    )
}

export const Dialogs = (props: any) => {
    return (
        <div className={styles.root}>
            <div className={styles.dialogs}>
                <div className={styles.dialogs__items}>
                    <DialogItem id={1} name={'Vitali'}/>
                    <DialogItem id={2} name={'Natasha'}/>
                    <DialogItem id={3} name={'Gena'}/>
                    <DialogItem id={4} name={'Larisa'}/>
                    <DialogItem id={5} name={'Valera'}/>
                    <DialogItem id={6} name={'Vlad'}/>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.messages__items}>
                    <MessageItem message="Hi"/>
                    <MessageItem message="Hello"/>
                    <MessageItem message="How are you?"/>
                    <MessageItem message="What happened?"/>
                    <MessageItem message="How can i do it?"/>
                    <MessageItem message="Yo"/>
                </div>
            </div>
        </div>
    )
}