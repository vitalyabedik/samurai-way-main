import styles from './Posts.module.css';

import {Post} from './Post/Post';

export type MessageType = {
    message: string
    likesCount: number
}

type PropsType = {
    posts: Array<MessageType>
}

export const Posts = (props: PropsType) => {

    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={styles.timeline}>
            <div className={styles.createPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}