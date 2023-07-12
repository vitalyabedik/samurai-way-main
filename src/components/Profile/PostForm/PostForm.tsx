import React from 'react';

import styles from './PostForm.module.css';

import {UserType} from '../../../types';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type FormDataType = {
    newPostText: string
    currentUser: UserType
}

export const PostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <div className={styles.root}>
            <form onSubmit={props.handleSubmit}>
                <Field component="textarea"
                       className={styles.textarea} name={'newPostText'}
                       placeholder={'What\'s Your Mind ? Hamse!'}
                />
                <div className={styles.buttonBlock}>
                    <button className={styles.button}>Add post</button>
                </div>
            </form>
        </div>
    )
}

export const PostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(PostForm)