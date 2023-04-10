import styles from './Posts.module.css';

import {Post} from './Post/Post';


export const Posts = () => {
    return (
        <div className={styles.timeline}>
            <div className={styles.createPost}>
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