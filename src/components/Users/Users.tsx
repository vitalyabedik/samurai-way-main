import axios from 'axios';
import React, {useEffect} from 'react';

import styles from './Users.module.css'

import {UsersPropsType} from './UsersContainer';
import defaultUserPhoto from '../../assets/images/users/default-user.png'

export const Users = (props: UsersPropsType) => {
        const {users} = props.usersPage


        // if (users.length === 0) {
        //     props.setUsers([
        //         {
        //             id: 1,
        //             followed: true,
        //             avatar: avatar1,
        //             userFirstName: 'Dennis',
        //             userLastName: 'Han',
        //             status: 'I am a boss',
        //             location: {
        //                 city: 'New York',
        //                 country: 'USA'
        //             }
        //         },
        //         {
        //             id: 2,
        //             followed: false,
        //             avatar: avatar2,
        //             userFirstName: 'Erica',
        //             userLastName: 'Jones',
        //             status: 'I am a friend',
        //             location: {
        //                 city: 'Berlin',
        //                 country: 'Germany'
        //             }
        //         },
        //         {
        //             id: 3,
        //             followed: false,
        //             avatar: avatar3,
        //             userFirstName: 'Alex',
        //             userLastName: 'Dolgove',
        //             status: 'I am a doctor',
        //             location: {
        //                 city: 'Kiev',
        //                 country: 'Ukraine'
        //             }
        //         },
        //         {
        //             id: 4,
        //             followed: false,
        //             avatar: avatar4,
        //             userFirstName: 'Alex',
        //             userLastName: 'Dolgove',
        //             status: 'I am a doctor',
        //             location: {
        //                 city: 'Kiev',
        //                 country: 'Ukraine'
        //             }
        //         },
        //         {
        //             id: 5,
        //             followed: false,
        //             avatar: avatar5,
        //             userFirstName: 'Dennis',
        //             userLastName: 'Han',
        //             status: 'I am a boss',
        //             location: {
        //                 city: 'New York',
        //                 country: 'USA'
        //             }
        //         },
        //         {
        //             id: 6,
        //             followed: false,
        //             avatar: avatar6,
        //             userFirstName: 'Alex',
        //             userLastName: 'Dolgove',
        //             status: 'I am a doctor',
        //             location: {
        //                 city: 'Kiev',
        //                 country: 'Ukraine'
        //             }
        //         },
        //         {
        //             id: 7,
        //             followed: false,
        //             avatar: avatar7,
        //             userFirstName: 'Stella',
        //             userLastName: 'Johnson',
        //             status: 'I am a designer',
        //             location: {
        //                 city: 'Bali',
        //                 country: 'Indonesia'
        //             }
        //         },
        //         {
        //             id: 8,
        //             followed: false,
        //             avatar: avatar8,
        //             userFirstName: 'Dennis',
        //             userLastName: 'Han',
        //             status: 'I am a boss',
        //             location: {
        //                 city: 'New York',
        //                 country: 'USA'
        //             }
        //         },
        //     ])
        // }

        useEffect(() => {
            const baseURL = 'https://social-network.samuraijs.com/api/1.0'
            axios.get(`${baseURL}/users`).then(res => {
                const data = res.data.items
                props.setUsers(data)
            })
        }, [])


        const onClickFollowHandler = (userId: number) => {
            props.follow(userId)
        }

        const onClickUnFollowHandler = (userId: number) => {
            props.unFollow(userId)
        }

        return (
            <div>
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
