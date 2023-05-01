import styles from './Dialogs.module.css'

import {MessageItem} from './Message';
import {DialogItems} from './DialogItems';
import {DialogForm} from './DialogsForm';
import {DialogsPageType} from '../../types';
import {ActionTypes} from '../../redux/state';

type PropsType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void
    // addMessage: () => void
    // updateNewMessageText: (newMessageText: string) => void
}

export const Dialogs = (props: PropsType) => {
    // const {addMessage, updateNewMessageText} = props
    const {dispatch} = props
    const {dialogs, messages, newMessageText} = props.state

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
                <DialogForm newMessageText={newMessageText}
                            dispatch={dispatch}
                />
            </div>
        </div>
    )
}