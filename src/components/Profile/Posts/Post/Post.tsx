import styles from './Post.module.css';

import {MessageType} from '../Posts';


export const Post = (props: MessageType) => {
    return (
        <div className={styles.item}>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}