import styles from './Dialogs.module.css'

import {MessageItem} from './Message';
import {DialogItems} from './DialogItems';
import {DialogForm} from './DialogsForm';
import {DialogsPageType} from '../../types';


type PropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: PropsType) => {
    const dialogsElements = props.state.dialogs.map(dialog => {
        return (
            <DialogItems id={dialog.id} dialog={dialog}/>
        )
    })

    const messagesElements = props.state.messages.map(message => {
        return (
            <MessageItem id={message.id} message={message.message}/>
        )
    })

    return (
        <div className={styles.root}>
            <div className={styles.dialogs__items}>{dialogsElements}</div>
            <div className={styles.messages}>
                <div className={styles.messages__items}>{messagesElements}</div>
                <DialogForm/>
            </div>
        </div>
    )
}