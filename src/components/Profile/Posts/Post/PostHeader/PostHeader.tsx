import styles from './PostHeader.module.css';

import moreIcon from '../../../../../assets/images/posts/icon-more.svg'
import {UserType} from '../../../../../types';

type PropsType = {
    currentUser: UserType
}

export const PostHeader = (props: PropsType) => {
    return (
        <div className={styles.root}>
            <div className={styles.user}>
                <div className={styles.user__image}>
                    <img className={styles.user__avatar} src={props.currentUser.avatar} alt="contact-avatar"/>
                </div>
                <span className={styles.user__Name}>{`${props.currentUser.userFirstName} ${props.currentUser.userLastName}`}</span>
            </div>
            <div className={styles.iconBlock}>
                <img className={styles.icon} src={moreIcon} alt="more-icon"/>
            </div>
        </div>
    )
}