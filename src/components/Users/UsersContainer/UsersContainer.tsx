import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {AppStateType} from '../../../redux/redux-store';
import {FilterType, FollowingInProgressType} from '../../../redux/reducers/usersReducer';
import {UserType} from '../../../types/usersPageTypes';
import {
    setCurrentPageAC,
    setUsersAC,
} from '../../../redux/actions/usersAction';
import {Users} from '../Users';
import {Preloader} from '../../common';
import {
    followTC,
    getUsersTC,
    unFollowTC,
} from '../../../redux/thunks/usersThunk';
import {
    getCurrentPage, getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from '../../../redux/selectors/usersSelector';

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: FollowingInProgressType
    filter: FilterType
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    changePage: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

export class UsersContainerAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize, getUsers} = this.props
        getUsers(currentPage, pageSize, {term: '', friend: null})
    }

    onPageChanged = (currentPage: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType ) => {
        const {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {
        return (
            <>
                {this.props.isLoading
                    ? <Preloader/>
                    : <Users users={this.props.users}
                             currentPage={this.props.currentPage}
                             pageSize={this.props.pageSize}
                             totalUsersCount={this.props.totalUsersCount}
                             follow={this.props.follow}
                             unFollow={this.props.unFollow}
                             onPageChanged={this.onPageChanged}
                             followingInProgress={this.props.followingInProgress}
                             onFilterChanged={this.onFilterChanged}
                             filter={this.props.filter}
                    />}
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        getUsers: getUsersTC,
        follow: followTC,
        unFollow: unFollowTC,
    }),
)(UsersContainerAPI)

