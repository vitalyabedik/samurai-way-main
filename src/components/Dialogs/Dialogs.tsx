import styles from './Dialogs.module.css'

import {MessageItem} from './Message';
import {DialogItems} from './DialogItems';
import {DialogsFormRedux, FormDataType} from './DialogsForm';
import {DialogsPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';
import React from 'react';

export const Dialogs = (props: DialogsPropsType) => {
    const {isAuth, sendMessage} = props
    const {dialogs, messages} = props.dialogsPage

    const addNewMessage = (values: FormDataType) => {
       sendMessage(values.newMessageBody)
    }

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


    // if (isAuth) return <Redirect to={'/profile'}/>  ???

    return (
        <div className={styles.root}>
            <div className={styles.dialogs__items}>{dialogsElements}</div>
            <div className={styles.messages}>
                <div className={styles.messages__items}>{messagesElements}</div>
                <DialogsFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}