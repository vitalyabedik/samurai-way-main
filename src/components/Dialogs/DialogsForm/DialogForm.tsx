import React, {createRef} from 'react';

import styles from './DialogForm.module.css'

type PropsType = {

}

export const DialogForm = (props: PropsType) => {
    const textareaRef = createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        const text = textareaRef.current?.value
        alert(text)
    }

    return (
        <div className={styles.root}>
            <div className={styles.textareaBlock}>
                <textarea ref={textareaRef} className={styles.textarea} placeholder={'Your Message'}></textarea>
            </div>
            <div className={styles.buttonBlock}>
                <button onClick={sendMessage} className={styles.button}>Send</button>
            </div>
        </div>
    )
}



