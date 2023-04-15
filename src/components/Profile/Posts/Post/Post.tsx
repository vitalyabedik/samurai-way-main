import styles from './Post.module.css';

import {PostType} from '../../../../types/profilePage/profilePageTypes';

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