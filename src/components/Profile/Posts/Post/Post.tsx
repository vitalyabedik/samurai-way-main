import styles from './Post.module.css';

import {PostHeader} from './PostHeader';
import {PostType} from '../../../../types/profilePageTypes';
import likeIcon from '../../../../assets/images/profile/about/icon-heart.svg'
import {UserType} from '../../../../types';

type PropsType = {
    currentUser: UserType
    post: PostType
}

export const Post = (props: PropsType) => {
    return (
        <div className={styles.root}>
            <PostHeader currentUser={props.currentUser}/>
            <div className={styles.text}>{props.post.message}</div>
            <div className={styles.likes}>
                <img className={styles.likesIcon} src={likeIcon} alt="icon-likes"/>
                <span className={styles.likesCount}>{props.post.likesCount}</span>
            </div>
        </div>
    )
}