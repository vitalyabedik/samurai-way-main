import React, {createRef} from 'react';

import styles from './DialogForm.module.css'

type PropsType = {
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
    newMessageText: string
}

export const DialogForm = (props: PropsType) => {
    const {addMessage, updateNewMessageText, newMessageText} = props

    const newMessageRef = createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        addMessage()
    }

    const onMessageChange = () => {
        const text = newMessageRef.current?.value
        text && updateNewMessageText(text)
    }

    return (
        <div className={styles.root}>
            <div className={styles.textareaBlock}>
                <textarea onChange={onMessageChange}
                          ref={newMessageRef}
                          value={props.newMessageText}
                          className={styles.textarea}
                          placeholder={'Your Message'}
                />
            </div>
            <div className={styles.buttonBlock}>
                <button onClick={sendMessage} className={styles.button}>Send</button>
            </div>
        </div>
    )
}



