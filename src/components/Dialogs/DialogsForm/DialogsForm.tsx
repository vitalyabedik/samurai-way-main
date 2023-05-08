import React, {createRef} from 'react';

import styles from './DialogsForm.module.css'

import { StateType} from '../../../redux/store';


type PropsType = {
    state: StateType
    sendMessage: () => void
    onMessageChange: (text: string) => void
}

export const DialogsForm = (props: PropsType) => {
    const {state, sendMessage, onMessageChange} = props
    const newMessageText = state.dialogsPage.newMessageText

    const newMessageRef = createRef<HTMLTextAreaElement>()

    const sendMessageHandler = () => {
        sendMessage()
    }

    const onMessageChangeHandler = () => {
        const text = newMessageRef.current?.value
        text && onMessageChange(text)
    }

    return (
        <div className={styles.root}>
            <div className={styles.textareaBlock}>
                <textarea onChange={onMessageChangeHandler}
                          ref={newMessageRef}
                          value={newMessageText}
                          className={styles.textarea}
                          placeholder={'Your Message'}
                />
            </div>
            <div className={styles.buttonBlock}>
                <button onClick={sendMessageHandler} className={styles.button}>Send</button>
            </div>
        </div>
    )
}



