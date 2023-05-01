import React, {createRef} from 'react';

import styles from './DialogForm.module.css'
import {ActionTypes} from '../../../redux/state';
import {addMessageAC, changeNewMessageTextAC} from '../../../redux/actions/messagesAction';

type PropsType = {
    dispatch: (action: ActionTypes) => void
    newMessageText: string
}

export const DialogForm = (props: PropsType) => {
    const {dispatch} = props

    const newMessageRef = createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        dispatch(addMessageAC())
    }

    const onMessageChange = () => {
        const text = newMessageRef.current?.value
        text && dispatch(changeNewMessageTextAC(text))
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



