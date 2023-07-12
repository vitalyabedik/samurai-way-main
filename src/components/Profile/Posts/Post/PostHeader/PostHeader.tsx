import styles from './PostHeader.module.css';

import moreIcon from '../../../../../assets/images/posts/icon-more.svg'
import {UserType} from '../../../../../types';

type PropsType = {
    currentUser: UserType
    showMore?: boolean
}

export const PostHeader = (props: PropsType) => {
    const {showMore = true} = props
    const {avatar, userFirstName, userLastName} = props.currentUser

    return (
        <div className={styles.root}>
            <div className={styles.user}>
                <div className={styles.user__image}>
                    <img className={styles.user__avatar} src={avatar} alt="contact-avatar"/>
                </div>
                <span className={styles.user__Name}>{`${userFirstName} ${userLastName}`}</span>
            </div>
            {showMore && <div className={styles.iconBlock}>
                <img className={styles.icon} src={moreIcon} alt="more-icon"/>
            </div>}
        </div>
    )
}