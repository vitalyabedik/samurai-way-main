import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Users.module.css';

import defaultUserPhoto from '../../assets/images/users/default-user.png';
import {UserType} from '../../types/usersPageTypes';
import {usersAPI} from '../../api';
import {FollowingInProgressType} from '../../redux/reducers/usersReducer';

type PropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number
    totalUsersCount: number
    followingInProgress: FollowingInProgressType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    setUsersFollowing: (userId: number, followingInProgress: boolean) => void
}

export const Users: React.FC<PropsType> = (props) => {
    const {
        users,
        currentPage,
        pageSize,
        totalUsersCount,
        follow,
        unFollow,
        followingInProgress,
        onPageChanged,
        setUsersFollowing
    } = props

    const onClickFollowHandler = (userId: number) => {
        setUsersFollowing(userId, true)
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    follow(userId)
                }
            })
        setUsersFollowing(userId, false)
    }

    const onClickUnFollowHandler = (userId: number) => {
        setUsersFollowing(userId, true)
        usersAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    unFollow(userId)
                }
            })
        setUsersFollowing(userId, false)
    }


    const onPageChangedHandler = (pageNumber: number) => {
        onPageChanged(pageNumber)
    }

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={styles.pagination}>
                {pages.map((p, i) => {
                    return (
                        <span className={currentPage === p ? styles.selectedPage : ''}
                              onClick={() => onPageChangedHandler(p)}
                        >
                                {p}
                            </span>
                    )
                })}
            </div>
            {
                users.map(user => {
                    let isDisabled = followingInProgress.some(id => id === user.id)
                    console.log(isDisabled)
                    return (
                        <div key={user.id}>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img className={styles.userPhoto}
                                         src={user.photos.small ? user.photos.small : defaultUserPhoto}
                                         alt="user-image"/>
                                </NavLink>
                            </div>
                            <div>
                                <span>{user.name}</span>
                                <span>{user.status}</span>
                            </div>
                            <div>
                                <span>{`${'user.location.city'} ${'user.location.country'}`}</span>
                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <button disabled={isDisabled} onClick={() => {onClickUnFollowHandler(user.id)}}>Unfollow</button>
                                        : <button disabled={isDisabled} onClick={() => {onClickFollowHandler(user.id)}}>Follow</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}