import styles from './Friends.module.css';

import {Friend} from '../Friend';
import {UserType} from '../../../../types/usersPageTypes';
import {useState} from 'react';

type PropsType = {
    friends: UserType[]
}

export const Friends = (props: PropsType) => {
    const {friends} = props

    const [showAllFriends, setShowAllFriends] = useState(false)

    const onShowClickHandler = () => setShowAllFriends(!showAllFriends)

    const displayedFriends = showAllFriends ? friends : friends.slice(0, 6)

    return (
        <div className={styles.root}>
            <div className={styles.friendsHeader}>
                <div className={styles.titleAndCount}>
                    <h4>Friends</h4>
                    <div className={styles.friendsCount}>{friends.length} Friends</div>
                </div>
                <div className={styles.seeAll}>
                    {
                        !showAllFriends
                            ? <a onClick={onShowClickHandler}>See all</a>
                            : <a onClick={onShowClickHandler}>Hide friends</a>
                    }
                </div>
            </div>
            <ul className={styles.items}>
                {displayedFriends.map(friend =>
                    <Friend key={friend.id} friend={friend}/>
                )}
            </ul>
            {
                !showAllFriends
                    ? <button onClick={onShowClickHandler} className={styles.friendsButton}>See all</button>
                    : <button onClick={onShowClickHandler} className={styles.friendsButton}>Hide friends</button>
            }
        </div>
    )
}