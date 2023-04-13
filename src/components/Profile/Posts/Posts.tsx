import styles from './Posts.module.css';

import {Post} from './Post/Post';


export const Posts = () => {
    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'It\'s my first post?', likesCount: 10},
    ]

    const postsElements = posts.map(post => <Post message={post.message} likes={post.likesCount}/>)

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