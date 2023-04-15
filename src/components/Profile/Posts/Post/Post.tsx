import styles from './Post.module.css';

import {PostType} from '../../../../index';

export const Post = (props: PostType) => {
    return (
        <div className={styles.item}>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}