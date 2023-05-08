import styles from './Dialogs.module.css'

import {MessageItem} from './Message';
import {DialogItems} from './DialogItems';
import {StoreType} from '../../redux/redux-store';
import {DialogsFormContainer} from './DialogsFormContainer';

type PropsType = {
    store: StoreType
}

export const Dialogs = (props: PropsType) => {
    const state = props.store.getState()
    const {dialogs, messages} = state.dialogsPage

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
                <DialogsFormContainer store={props.store}/>
            </div>
        </div>
    )
}