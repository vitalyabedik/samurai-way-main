import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Users.module.css';
import defaultUserPhoto from '../../assets/images/users/default-user.png';
import {UserType} from '../../types/usersPageTypes';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';

type PropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number
    totalUsersCount: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users: React.FC<PropsType> = (props) => {
    const {
        users,
        currentPage,
        pageSize,
        totalUsersCount,
        follow,
        unFollow,
        onPageChanged,
    } = props

    const onClickFollowHandler = (userId: number) => {
        follow(userId)
    }

    const onClickUnFollowHandler = (userId: number) => {
        unFollow(userId)
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
                {pages.map(p => {
                    return (
                        <span
                            className={currentPage === p ? styles.selectedPage : ''}
                            onClick={() => onPageChangedHandler(p)}
                        >
                                {p}
                            </span>
                    )
                })}
            </div>
            {
                users.map(user => {
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
                                        ? <button onClick={() => {
                                            const baseURL = 'https://social-network.samuraijs.com/api/1.0'
                                            const userId = user.id

                                            axios.delete(`${baseURL}/follow/${userId}`,  {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY' : '2f06710d-814e-48f6-bf89-aa04b6eef483'
                                                }
                                            })
                                                .then(res => {
                                                    if (res.data.resultCode === 0) {
                                                        onClickUnFollowHandler(user.id)
                                                    }
                                                })
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            const baseURL = 'https://social-network.samuraijs.com/api/1.0'
                                            const userId = user.id


                                            axios.post(`${baseURL}/follow/${userId}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY' : '2f06710d-814e-48f6-bf89-aa04b6eef483'
                                                }
                                            })
                                                .then(res => {
                                                    if (res.data.resultCode === 0) {
                                                        onClickFollowHandler(user.id)
                                                    }
                                                })
                                        }}>Follow</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}