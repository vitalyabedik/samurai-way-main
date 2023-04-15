import styles from './Friends.module.css';
import {FriendsType} from '../../../../types';

type PropsType = {
    friends: FriendsType
}

export const Friends = (props: PropsType) => {
    return (
        <div className={styles.root}>
            <div className={styles.friendsHeader}>
                <div className={styles.titleAndCount}>
                    <h4>Friends</h4>
                    <div className={styles.friendsCount}>{props.friends.count} Friends</div>
                </div>
                <div className={styles.seeAll}>
                    <a>See all</a>
                </div>
            </div>
            <ul className={styles.items}>
                {props.friends.list.slice(0, 6).map(friend => {
                    return (
                        <li key={friend.id}>
                            <div className={styles.item}>
                                <img className={styles.img} src={friend.avatar} alt="avatar-friend"/>
                                <span className={styles.userName}>
                                    {`${friend.userFirstName} ${friend.userLastName}`}
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button className={styles.friendsButton}>See all</button>
        </div>
    )
}