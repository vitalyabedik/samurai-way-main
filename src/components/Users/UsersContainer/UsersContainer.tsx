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
import {usersAPI} from '../../../api/usersApi';

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
        this.props.setUsersLoading(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsersLoading(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
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
        this.props.setUsersLoading(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsersLoading(false)
                this.props.setUsers(data.items)
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



