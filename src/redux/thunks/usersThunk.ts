import {Dispatch} from 'redux';

import {usersAPI} from '../../api';
import {
    followAC, setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    setUsersFollowingAC,
    setUsersLoadingAC, unFollowAC
} from '../actions/usersAction';
import {AppThunkDispatch, AppThunkType} from '../redux-store';

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setUsersLoadingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(res => {
                dispatch(setUsersLoadingAC(false))
                dispatch(setUsersAC(res.items))
                dispatch(setTotalUserCountAC(res.totalCount))
            })
    }
}

export const changePageThunkCreator = (currentPage: number, pageSize: number): AppThunkType => {
    return (dispatch: AppThunkDispatch) => {
        dispatch(setCurrentPageAC(currentPage))
        dispatch(getUsersThunkCreator(currentPage, pageSize))
    }
}

export const followThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setUsersFollowingAC(userId, true))
        usersAPI.follow(userId)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(followAC(userId))
                }
            })
        dispatch(setUsersFollowingAC(userId, false))
    }
}

export const unFollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setUsersFollowingAC(userId, true))
        usersAPI.unFollow(userId)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(unFollowAC(userId))
                }
            })
        dispatch(setUsersFollowingAC(userId, false))
    }
}

