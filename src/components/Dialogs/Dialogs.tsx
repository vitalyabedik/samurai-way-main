import styles from './Dialogs.module.css'

import {MessageItem} from './Message';
import {DialogItems} from './DialogItems';
import {DialogsForm} from './DialogsForm';
import {StateType} from '../../redux/store';

type PropsType = {
    state: StateType
    sendMessage: () => void
    onMessageChange: (text: string) => void
}

export const Dialogs = (props: PropsType) => {
    const {sendMessage, onMessageChange} = props
    const {dialogs, messages} = props.state.dialogsPage

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
                <DialogsForm state={props.state} sendMessage={sendMessage} onMessageChange={onMessageChange}/>
            </div>
        </div>
    )
}