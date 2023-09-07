import styles from './Friends.module.css';

import {Friend} from '../Friend';
import {UserType} from '../../../../types/usersPageTypes';

type PropsType = {
    friends: UserType[]
}

export const Friends = (props: PropsType) => {
    const {friends} = props

    return (
        <div className={styles.root}>
            <div className={styles.friendsHeader}>
                <div className={styles.titleAndCount}>
                    <h4>Friends</h4>
                    <div className={styles.friendsCount}>{friends.length} Friends</div>
                </div>
                <div className={styles.seeAll}>
                    <a>See all</a>
                </div>
            </div>
            <ul className={styles.items}>
                {friends.slice(0, 6).map(friend =>
                    <Friend key={friend.id} friend={friend}/>
                )}
            </ul>
            <button className={styles.friendsButton}>See all</button>
        </div>
    )
}