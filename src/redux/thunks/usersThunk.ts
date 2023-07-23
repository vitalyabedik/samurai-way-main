import {Dispatch} from 'redux';

import {usersAPI} from '../../api';
import {
    followAC, setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    setUsersFollowingAC,
    setUsersLoadingAC, unFollowAC, UsersActionType
} from '../actions/usersAction';
import {AppThunkDispatch, AppThunkType} from '../redux-store';

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setUsersLoadingAC(true))

    const res = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setUsersLoadingAC(false))
    dispatch(setUsersAC(res.items))
    dispatch(setTotalUserCountAC(res.totalCount))
}

export const changePageThunkCreator = (currentPage: number, pageSize: number): AppThunkType => (dispatch: AppThunkDispatch) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(getUsersThunkCreator(currentPage, pageSize))
}


export const followThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setUsersFollowingAC(userId, true))
    const res = await usersAPI.follow(userId)

    if (res.resultCode === 0) {
        dispatch(followAC(userId))
    }

    dispatch(setUsersFollowingAC(userId, false))
}

export const unFollowThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setUsersFollowingAC(userId, true))

    const res = await usersAPI.unFollow(userId)
    if (res.resultCode === 0) {
        dispatch(unFollowAC(userId))
    }

    dispatch(setUsersFollowingAC(userId, false))
}

// const followUnFollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: (userId: number) => UsersActionType) => {
//     dispatch(setUsersFollowingAC(userId, true))
//     const res = await apiMethod(userId)
//
//     if (res.resultCode === 0) {
//         dispatch(actionCreator(userId))
//     }
//
//     dispatch(setUsersFollowingAC(userId, false))
// }