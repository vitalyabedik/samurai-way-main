import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './User.module.css';

import defaultUserPhoto from '../../../assets/images/users/default-user.png';
import {UserType} from '../../../types/usersPageTypes';
import {FollowingInProgressType} from '../../../redux/reducers/usersReducer';


type PropsType = {
    user: UserType
    followingInProgress: FollowingInProgressType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const User = (props: PropsType) => {
    const {
        user,
        followingInProgress,
        follow,
        unFollow,
    } = props

    const onClickFollowHandler = (userId: number) => {
        follow(userId)
    }

    const onClickUnFollowHandler = (userId: number) => {
        unFollow(userId)
    }

    let isDisabled = followingInProgress.some(id => id === user.id)

    return (
        <div className={styles.container}>
            <div className={styles.root}>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={styles.userPhoto}
                         src={user.photos.small ? user.photos.small : defaultUserPhoto}
                         alt="user-image"/>
                </NavLink>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.status}>{user.status ?  user.status :'No status'}</div>
                {
                    user.followed
                        ? <button className={styles.buttonUnfollow} disabled={isDisabled} onClick={() => {
                            onClickUnFollowHandler(user.id)
                        }}>Unfollowing</button>
                        : <button className={styles.buttonFollow} disabled={isDisabled} onClick={() => {
                            onClickFollowHandler(user.id)
                        }}>Following</button>
                }
            </div>
        </div>

    );
}