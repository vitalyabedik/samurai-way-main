import styles from './PostForm.module.css';
import {StateType} from '../../../redux/state';
import React from 'react';

type PropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const PostForm = (props: PropsType) => {
    const {addPost, updateNewPostText} = props
    const {currentUser, profilePage} = props.state

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current?.value
        text && updateNewPostText(text)

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