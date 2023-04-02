import React from 'react';

import styles from './Posts.module.css';

import {Post} from './Post/Post';

export const Posts: React.FC = () => {
    return (
        <div className={styles.items}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message="Hi, how are you?" likes={4}/>
                <Post message={'It\'s my first post?'} likes={10}/>
            </div>
        </div>
    )
}