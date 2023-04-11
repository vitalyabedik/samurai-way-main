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
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

const dialogsData = [
    {id: 1, name: 'Dennis Han'},
    {id: 2, name: 'Erica Jones'},
    {id: 3, name: 'Alex Dolgove'},
    {id: 4, name: 'Alex Dolgove'},
    {id: 5, name: 'Stella Johnson'},
    {id: 6, name: 'Alex Dolgove'},
    {id: 7, name: 'Stella Johnson'},
    {id: 8, name: 'Dennis Han'},
]

const messagesData = [
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

    return (
        <div className={styles.root}>
            <div className={styles.dialogs}>
                <div className={styles.dialogs__items}>
                    <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                    <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                    <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                    <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                    <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                    <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>
                    <DialogItem id={dialogsData[6].id} name={dialogsData[6].name}/>
                    <DialogItem id={dialogsData[7].id} name={dialogsData[7].name}/>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.messages__items}>
                    <MessageItem id={messagesData[0].id} message={messagesData[0].message}/>
                    <MessageItem id={messagesData[1].id} message={messagesData[1].message}/>
                    <MessageItem id={messagesData[2].id} message={messagesData[2].message}/>
                    <MessageItem id={messagesData[3].id} message={messagesData[3].message}/>
                    <MessageItem id={messagesData[4].id} message={messagesData[4].message}/>
                    <MessageItem id={messagesData[5].id} message={messagesData[5].message}/>
                    <MessageItem id={messagesData[6].id} message={messagesData[6].message}/>
                    <MessageItem id={messagesData[7].id} message={messagesData[7].message}/>
                </div>
            </div>
        </div>
    )
}