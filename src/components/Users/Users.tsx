import React, {useEffect} from 'react';
import {UsersPropsType} from './UsersContainer';
import avatar1 from '../../assets/images/profile/avatars/avatar-1.jpg';
import avatar2 from '../../assets/images/profile/avatars/avatar-2.jpg';
import avatar3 from '../../assets/images/profile/avatars/avatar-3.jpg';
import avatar4 from '../../assets/images/profile/avatars/avatar-4.jpg';
import avatar5 from '../../assets/images/profile/avatars/avatar-5.jpg';
import avatar6 from '../../assets/images/profile/avatars/avatar-6.jpg';
import avatar7 from '../../assets/images/profile/avatars/avatar-7.jpg';
import avatar8 from '../../assets/images/profile/avatars/avatar-8.jpg';

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
            props.setUsers([
                {
                    id: 1,
                    followed: true,
                    avatar: avatar1,
                    userFirstName: 'Dennis',
                    userLastName: 'Han',
                    status: 'I am a boss',
                    location: {
                        city: 'New York',
                        country: 'USA'
                    }
                },
                {
                    id: 2,
                    followed: false,
                    avatar: avatar2,
                    userFirstName: 'Erica',
                    userLastName: 'Jones',
                    status: 'I am a friend',
                    location: {
                        city: 'Berlin',
                        country: 'Germany'
                    }
                },
                {
                    id: 3,
                    followed: false,
                    avatar: avatar3,
                    userFirstName: 'Alex',
                    userLastName: 'Dolgove',
                    status: 'I am a doctor',
                    location: {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
                },
                {
                    id: 4,
                    followed: false,
                    avatar: avatar4,
                    userFirstName: 'Alex',
                    userLastName: 'Dolgove',
                    status: 'I am a doctor',
                    location: {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
                },
                {
                    id: 5,
                    followed: false,
                    avatar: avatar5,
                    userFirstName: 'Dennis',
                    userLastName: 'Han',
                    status: 'I am a boss',
                    location: {
                        city: 'New York',
                        country: 'USA'
                    }
                },
                {
                    id: 6,
                    followed: false,
                    avatar: avatar6,
                    userFirstName: 'Alex',
                    userLastName: 'Dolgove',
                    status: 'I am a doctor',
                    location: {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
                },
                {
                    id: 7,
                    followed: false,
                    avatar: avatar7,
                    userFirstName: 'Stella',
                    userLastName: 'Johnson',
                    status: 'I am a designer',
                    location: {
                        city: 'Bali',
                        country: 'Indonesia'
                    }
                },
                {
                    id: 8,
                    followed: false,
                    avatar: avatar8,
                    userFirstName: 'Dennis',
                    userLastName: 'Han',
                    status: 'I am a boss',
                    location: {
                        city: 'New York',
                        country: 'USA'
                    }
                },
            ])
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
                                    <img src={user.avatar} alt="user-image"/>
                                </div>
                                <div>
                                    <span>{`${user.userFirstName} ${user.userLastName}`}</span>
                                </div>
                                <div>
                                    <span>{`${user.location.city} ${user.location.country}`}</span>
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
