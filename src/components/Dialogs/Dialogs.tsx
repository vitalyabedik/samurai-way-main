import styles from './Dialogs.module.css'

import {MessageItem} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsType, MessagesType} from '../../index';

type PropsType = {
    dialogs: DialogsType
    messages: MessagesType
}

export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.dialogs.map(dialog => {
        return (
            <DialogItem id={dialog.id} name={dialog.name}/>
        )
    })

    const messagesElements = props.messages.map(message => {
        return (
            <MessageItem id={message.id} message={message.message}/>
        )
    })

    return (
        <div className={styles.root}>
            <div className={styles.dialogs}>
                <div className={styles.dialogs__items}>{dialogsElements}</div>
            </div>
            <div className={styles.messages}>
                <div className={styles.messages__items}>{messagesElements}</div>
            </div>
        </div>
    )
}