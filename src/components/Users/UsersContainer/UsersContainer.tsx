import React from 'react';
import {connect} from 'react-redux';

import {AppStateType} from '../../../redux/redux-store';
import {FollowingInProgressType, InitialStateType} from '../../../redux/reducers/usersReducer';
import {UserType} from '../../../types/usersPageTypes';
import {
    setCurrentPageAC,
    setUsersAC,
} from '../../../redux/actions/usersAction';
import {Users} from '../Users';
import {Preloader} from '../../common';
import {
    changePageThunkCreator,
    followThunkCreator,
    getUsersThunkCreator,
    unFollowThunkCreator
} from '../../../redux/thunks/usersThunk';
import {compose} from 'redux';
import {addMessageAC, changeNewMessageTextAC} from '../../../redux/actions/dialogsAction';
import {withAuthRedirectComponent} from '../../../hoc/withAuthRedirect';
import {Dialogs} from '../../Dialogs';

type MapStateToPropsType = {
    usersPage: InitialStateType
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
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
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
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changePage(pageNumber, this.props.pageSize)
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// export const UsersContainer = connect(mapStateToProps, {
//     setUsers: setUsersAC,
//     setCurrentPage: setCurrentPageAC,
//     getUsers: getUsersThunkCreator,
//     follow: followThunkCreator,
//     unFollow: unFollowThunkCreator,
//     changePage: changePageThunkCreator
// })(UsersContainerAPI)



export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        getUsers: getUsersThunkCreator,
        follow: followThunkCreator,
        unFollow: unFollowThunkCreator,
        changePage: changePageThunkCreator
    }),
    withAuthRedirectComponent
)(UsersContainerAPI)