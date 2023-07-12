import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import styles from './DialogsForm.module.css'

export type FormDataType = {
    newMessageBody: string
}

export const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div className={styles.root}>
            <form onSubmit={props.handleSubmit}>
                <div className={styles.textareaBlock}>
                    <Field component="textarea" name="newMessageBody" placeholder="Enter your Message"/>
                </div>
                <div className={styles.buttonBlock}>
                    <button className={styles.button}>Send</button>
                </div>
            </form>
        </div>
    )
}

export const DialogsFormRedux = reduxForm<FormDataType>({form: 'dialogsForm'})(DialogsForm)



