import styles from './PostForm.module.css';
import {ActionTypes, StateType} from '../../../redux/state';
import React from 'react';

import {addPostAC, changeNewPostTextAC} from '../../../redux/actions/postAction';

type PropsType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
}

export const PostForm = (props: PropsType) => {
    const {dispatch} = props
    const {currentUser, profilePage} = props.state

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        dispatch(addPostAC())
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value
        text && dispatch(changeNewPostTextAC(text))
    }

    return (
        <div className={styles.root}>
            <div className={styles.imgAndTextarea}>
                <img className={styles.avatar} src={currentUser.avatar} alt="avatar-currentUser"/>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={profilePage.newPostText}
                          className={styles.textarea}
                          placeholder={'What\'s Your Mind ? Hamse!'}
                />
            </div>
            <div className={styles.buttonBlock}>
                <button onClick={addPostHandler} className={styles.button}>Add post</button>
            </div>
        </div>
    )
}