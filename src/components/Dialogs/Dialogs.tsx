import styles from './Dialogs.module.css'

import {MessageItem} from './Message';
import {DialogItems} from './DialogItems';
import {DialogsForm} from './DialogsForm';
import {DialogsPropsType} from './DialogsContainer';

export const Dialogs = (props: DialogsPropsType) => {
    const {sendMessage, onMessageChange} = props
    const {dialogs, messages} = props.dialogsPage

    const dialogsElements = dialogs.map(dialog => {
        return (
            <DialogItems key={dialog.id} id={dialog.id} dialog={dialog}/>
        )
    })

    const messagesElements = messages.map(message => {
        return (
            <MessageItem key={message.id} id={message.id} message={message.message}/>
        )
    })

    return (
        <div className={styles.root}>
            <div className={styles.dialogs__items}>{dialogsElements}</div>
            <div className={styles.messages}>
                <div className={styles.messages__items}>{messagesElements}</div>
                <DialogsForm state={props.dialogsPage} sendMessage={sendMessage} onMessageChange={onMessageChange}/>
            </div>
        </div>
    )
}