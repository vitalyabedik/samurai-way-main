import styles from './Posts.module.css';

import {Post} from './Post';
import {PostType} from '../../../types/profilePageTypes';


type PropsType = {
    posts: PostType[]
}

export const Posts = (props: PropsType) => {
    const postsElements = props.posts.map(post => {
        return (
            <Post key={post.id}
                  id={post.id}
                  message={post.message}
                  likesCount={post.likesCount}
            />
        )
    })

    return (
        <div className={styles.timeline}>
            <div className={styles.createPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    )
}