import React from 'react';

import styles from './Users.module.css';

import {UserType} from '../../types/usersPageTypes';
import {FollowingInProgressType} from '../../redux/reducers/usersReducer';
import {Pagination} from '../common/Pagination';
import {User} from './User';

type PropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number
    totalUsersCount: number
    followingInProgress: FollowingInProgressType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: PropsType) => {
    const {
        users,
        currentPage,
        pageSize,
        totalUsersCount,
        followingInProgress,
        follow,
        unFollow,
        onPageChanged,
    } = props

    console.log(users)
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2 className={styles.title}>Users</h2>
                <div className={styles.users}>
                    {
                        users.map(user =>
                            <User key={user.id}
                                  user={user}
                                  followingInProgress={followingInProgress}
                                  follow={follow}
                                  unFollow={unFollow}
                            />
                        )
                    }
                </div>
                <Pagination currentPage={currentPage}
                            pageSize={pageSize}
                            totalItemsCount={totalUsersCount}
                            onPageChanged={onPageChanged}
                />
            </div>
        </div>
    );
}