import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/usersReducer';
import {UserType} from '../../../types/usersPageTypes';
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC, setUsersLoadingAC,
    unFollowAC
} from '../../../redux/actions/usersAction';
import {Users} from '../Users';
import {Preloader} from '../../common';

type MapStateToPropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setUsersLoading: (isLoading: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

export class UsersContainerAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        const baseURL = 'https://social-network.samuraijs.com/api/1.0'
        const currentPage = `page=${this.props.currentPage}`
        const count = `page=${this.props.pageSize}`

        this.props.setUsersLoading(true)
        axios.get(`${baseURL}/users?${currentPage}&${count}`, {
            withCredentials: true
        })
            .then(res => {
                this.props.setUsersLoading(false)
                const data = res.data.items
                this.props.setUsers(data)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    render() {
        return (
            <>
                {this.props.isLoading && <Preloader/>}
                <Users users={this.props.usersPage.users}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       onPageChanged={this.onPageChanged}
                />
            </>
        );
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        const baseURL = 'https://social-network.samuraijs.com/api/1.0'
        const currentPage = `page=${pageNumber}`
        const count = `page=${this.props.pageSize}`

        this.props.setUsersLoading(true)
        axios.get(`${baseURL}/users?${currentPage}&${count}`, {
            withCredentials: true
        })
            .then(res => {
                this.props.setUsersLoading(false)
                const data = res.data.items
                this.props.setUsers(data)
            })
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUserCountAC,
    setUsersLoading: setUsersLoadingAC
})(UsersContainerAPI)



