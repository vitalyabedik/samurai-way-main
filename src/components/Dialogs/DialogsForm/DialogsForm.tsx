import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import styles from './DialogsForm.module.css'
import {Textarea} from '../../common/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators';

export type FormDataType = {
    newMessageBody: string
}

const maxLengthText = maxLengthCreator(50)

export const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div className={styles.root}>
            <form onSubmit={props.handleSubmit}>
                <div className={styles.textareaBlock}>
                    <Field component={Textarea}
                           name="newMessageBody"
                           placeholder="Enter your Message"
                           validate={[required, maxLengthText]}
                    />
                </div>
                <div className={styles.buttonBlock}>
                    <button className={styles.button}>Send</button>
                </div>
            </form>
        </div>
    )
}

export const DialogsFormRedux = reduxForm<FormDataType>({form: 'dialogsForm'})(DialogsForm)



