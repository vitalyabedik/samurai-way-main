import axios from 'axios';
import React, {useEffect} from 'react';

import styles from './Users.module.css'

import {UsersPropsType} from './UsersContainer';
import defaultUserPhoto from '../../assets/images/users/default-user.png'

export const Users = (props: UsersPropsType) => {
        const {users} = props.usersPage

        const fetchUsers = () => {
            const baseURL = 'https://social-network.samuraijs.com/api/1.0'
            axios.get(`${baseURL}/users`).then(res => {
                const data = res.data.items
                props.setUsers(data)
            })
        }

        // useEffect(() => {
        //     fetchUsers()
        // }, [])


        const onClickFollowHandler = (userId: number) => {
            props.follow(userId)
        }

        const onClickUnFollowHandler = (userId: number) => {
            props.unFollow(userId)
        }

        return (
            <div>
                <button onClick={fetchUsers}>Show users</button>
                {
                    users.map(user => {
                        return (
                            <div key={user.id}>
                                <div>
                                    <img className={styles.userPhoto}
                                         src={user.photos.small ? user.photos.small : defaultUserPhoto}
                                         alt="user-image"/>
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
                                            ? <button onClick={() => onClickUnFollowHandler(user.id)}>Unfollow</button>
                                            : <button onClick={() => onClickFollowHandler(user.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
;
