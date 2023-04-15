import styles from './Dialogs.module.css'

import {MessageItem} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../types';

type PropsType = {
    state : DialogsPageType
}

export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.state.dialogs.map(dialog => {
        return (
            <DialogItem id={dialog.id} name={dialog.name}/>
        )
    })

    const messagesElements = props.state.messages.map(message => {
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