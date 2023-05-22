import React from 'react';
import styles from './Users.module.css';
import defaultUserPhoto from '../../assets/images/users/default-user.png';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        const baseURL = 'https://social-network.samuraijs.com/api/1.0'
        axios.get(`${baseURL}/users`).then(res => {
            const data = res.data.items
            this.props.setUsers(data)
        })
    }

    onClickFollowHandler = (userId: number) => {
        this.props.follow(userId)
    }

    onClickUnFollowHandler = (userId: number) => {
        this.props.unFollow(userId)
    }


    render() {
        return (
            <div>
                {
                    this.props.usersPage.users.map(user => {
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
                                            ? <button
                                                onClick={() => this.onClickUnFollowHandler(user.id)}>Unfollow</button>
                                            : <button onClick={() => this.onClickFollowHandler(user.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}