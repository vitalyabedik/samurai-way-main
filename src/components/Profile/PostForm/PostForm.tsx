import styles from './PostForm.module.css';
import {StateType} from '../../../redux/state';

type PropsType = {
    state: StateType
}

export const PostForm = (props: PropsType) => {
    return (
        <div className={styles.root}>
            <div className={styles.imgAndTextarea}>
                <img className={styles.avatar} src={props.state.currentUser.avatar} alt="avatar-currentUser"/>
                <textarea className={styles.textarea} placeholder={'What\'s Your Mind ? Hamse!'}></textarea>
            </div>
            <div className={styles.buttonBlock}>
                <button className={styles.button}>Add post</button>
            </div>

        </div>
    )
}