import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './ChatForm.module.css'

import {sendChatMessageTC} from '../../../redux/thunks/chatThunk';
import { getChatStatus} from '../../../redux/selectors/chatSelector';

export const ChatForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const status = useSelector(getChatStatus)

    const dispatch = useDispatch()

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const sendMessageHandler = () => {
        if (!message) {
            return
        }

        dispatch(sendChatMessageTC(message))
        setMessage('')
    }

    const isDisabled = status !== 'ready'

    return (
        <div className={styles.root}>
            <div className={styles.textareaButtonBlock}>
                <textarea className={styles.textarea} value={message} onChange={onChangeMessageHandler}></textarea>
                <button disabled={isDisabled} className={styles.button} onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    )
}





