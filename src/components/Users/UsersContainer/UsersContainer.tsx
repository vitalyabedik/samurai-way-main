import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/usersReducer';
import {Users} from '../Users';
import {UserType} from '../../../types/usersPageTypes';
import {followAC, setUsersAC, unFollowAC} from '../../../redux/actions/usersAction';

type MapStateToPropsType = {
    usersPage: InitialStateType
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

