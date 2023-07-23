import styles from './Friends.module.css';

import {FriendsType} from '../../../../types';
import {Friend} from '../Friend';

type PropsType = {
    friends: FriendsType
}

export const Friends = (props: PropsType) => {
    const {friends} = props

    return (
        <div className={styles.root}>
            <div className={styles.friendsHeader}>
                <div className={styles.titleAndCount}>
                    <h4>Friends</h4>
                    <div className={styles.friendsCount}>{friends.count} Friends</div>
                </div>
                <div className={styles.seeAll}>
                    <a>See all</a>
                </div>
            </div>
            <ul className={styles.items}>
                {friends.list.slice(0, 6).map(friend =>
                    <Friend key={friend.id} friend={friend}/>
                )}
            </ul>
            <button className={styles.friendsButton}>See all</button>
        </div>
    )
}