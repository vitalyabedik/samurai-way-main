import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/usersReducer';
import {UserType} from '../../../types/usersPageTypes';
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC
} from '../../../redux/actions/usersAction';
import {Users} from '../Users';

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class UsersContainerAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        const baseURL = 'https://social-network.samuraijs.com/api/1.0'
        const currentPage = `page=${this.props.currentPage}`
        const count = `page=${this.props.pageSize}`

        axios.get(`${baseURL}/users?${currentPage}&${count}`).then(res => {
            const data = res.data.items
            this.props.setUsers(data)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        const baseURL = 'https://social-network.samuraijs.com/api/1.0'
        const currentPage = `page=${pageNumber}`
        const count = `page=${this.props.pageSize}`

        axios.get(`${baseURL}/users?${currentPage}&${count}`).then(res => {
            const data = res.data.items
            this.props.setUsers(data)
        })
    }

    render() {
        return (
            <Users users={this.props.usersPage.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   follow ={this.props.follow}
                   unFollow ={this.props.unFollow}
                   onPageChanged = {this.onPageChanged}
            />
        );
    }
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)


