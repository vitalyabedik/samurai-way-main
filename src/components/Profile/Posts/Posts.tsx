import styles from './Posts.module.css';

import {Post} from './Post/Post';


export const Posts = () => {
    const postData = [
        {id: 1, message:  "Hi, how are you?", likesCount: 4},
        {id: 2, message:  'It\'s my first post?', likesCount: 10},
    ]

    return (
        <div className={styles.timeline}>
            <div className={styles.createPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message={postData[0].message} likes={postData[0].likesCount}/>
                <Post message={postData[1].message} likes={postData[1].likesCount}/>
            </div>
        </div>
    )
}