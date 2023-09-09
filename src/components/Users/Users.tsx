import React from 'react';

import styles from './Users.module.css';

import {UserType} from '../../types/usersPageTypes';
import {FilterType, FollowingInProgressType} from '../../redux/reducers/usersReducer';
import {Pagination} from '../common/Pagination';
import {User} from './User';
import {UsersFilteredButtons} from './UsersFilteredButtons';

type PropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number
    totalUsersCount: number
    followingInProgress: FollowingInProgressType
    filter: FilterType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
}

export const Users = (props: PropsType) => {
    const {
        users,
        currentPage,
        pageSize,
        totalUsersCount,
        followingInProgress,
        filter,
        follow,
        unFollow,
        onPageChanged,
        onFilterChanged
    } = props

    return (
        <div className={styles.wrapper}>
            <div className={styles.root}>
                    <div className={styles.usersHeader}>
                        <h2 className={styles.title}>Users</h2>
                        <UsersFilteredButtons filter={filter} onFilterChanged={onFilterChanged}/>
                    </div>
                <div className={styles.container}>
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
        </div>
    );
}