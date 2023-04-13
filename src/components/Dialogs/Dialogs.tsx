import {NavLink} from 'react-router-dom';

import styles from './Dialogs.module.css'

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type DialogPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const dialogs = [
    {id: 1, name: 'Dennis Han'},
    {id: 2, name: 'Erica Jones'},
    {id: 3, name: 'Alex Dolgove'},
    {id: 4, name: 'Alex Dolgove'},
    {id: 5, name: 'Stella Johnson'},
    {id: 6, name: 'Alex Dolgove'},
    {id: 7, name: 'Stella Johnson'},
    {id: 8, name: 'Dennis Han'},
]

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'What happened?'},
    {id: 5, message: 'How can i do it?'},
    {id: 6, message: 'Yo'},
    {id: 7, message: 'Hello'},
    {id: 8, message: 'How are you?'},
]

const DialogItem = (props: DialogType) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={styles.dialog__item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props: MessageType) => {
    return (
        <div className={styles.message__item}>
            {props.message}
        </div>
    )
}

export const Dialogs = (props: DialogPropsType) => {
    const dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    const messagesElements = messages.map(message => <MessageItem id={message.id} message={message.message}/>)

    return (
        <div className={styles.root}>
            <div className={styles.dialogs}>
                <div className={styles.dialogs__items}>
                    {dialogsElements}
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.messages__items}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}