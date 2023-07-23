import React from 'react';
import styles from './Posts.module.css';

import {Post} from './Post';
import {PostType} from '../../../types/profilePageTypes';
import {UserType} from '../../../types';


type PropsType = {
    currentUser: UserType
    posts: PostType[]
}

export const Posts = React.memo((props: PropsType) => {
    const postsElements = props.posts.map(post => {
        return (
            <Post key={post.id}
                  post={post}
                  currentUser={props.currentUser}/>
        )
    })

    return (
        <div className={styles.timeline}>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    )
})