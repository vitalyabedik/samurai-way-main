import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {AppStateType} from '../../../redux/redux-store';
import {FollowingInProgressType} from '../../../redux/reducers/usersReducer';
import {UserType} from '../../../types/usersPageTypes';
import {
    setCurrentPageAC,
    setUsersAC,
} from '../../../redux/actions/usersAction';
import {Users} from '../Users';
import {Preloader} from '../../common';
import {
    changePageTC,
    followTC,
    getUsersTC,
    unFollowTC,
} from '../../../redux/thunks/usersThunk';
import {
    getCurrentPage, getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../../redux/selectors/usersSelector';

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: FollowingInProgressType
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    changePage: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

export class UsersContainerAPI extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize, getUsers} = this.props
        getUsers(currentPage, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isLoading && <Preloader/>}
                <Users users={this.props.users}
                       currentPage={this.props.currentPage}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, changePage} = this.props
        changePage(pageNumber, pageSize)
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        getUsers: getUsersTC,
        follow: followTC,
        unFollow: unFollowTC,
        changePage: changePageTC
    }),
)(UsersContainerAPI)