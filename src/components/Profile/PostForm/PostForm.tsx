import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import styles from './PostForm.module.css';

import {UserType} from '../../../types';
import {maxLengthCreator, required} from '../../../utils/validators';
import {Textarea} from '../../common/FormsControls';

export type FormDataType = {
    newPostText: string
    currentUser: UserType
}

const maxLengthText = maxLengthCreator(10)

export const PostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div className={styles.root}>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea}
                       className={styles.textarea}
                       name="newPostText"
                       placeholder={'What\'s Your Mind ?'}
                       validate={[required, maxLengthText]}
                />
                <div className={styles.buttonBlock}>
                    <button className={styles.button}>Add post</button>
                </div>
            </form>
        </div>
    )
}

export const PostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(PostForm)