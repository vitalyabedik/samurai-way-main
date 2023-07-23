import {Dispatch} from 'redux';

import {usersAPI} from '../../api';
import {
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    setUsersLoadingAC,
    followAC,
    unFollowAC,
} from '../actions/usersAction';
import {AppThunkDispatch, AppThunkType} from '../redux-store';
import {followUnfollow} from '../../utils/followUnfollow';

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
    await followUnfollow(userId, followAC, usersAPI.follow.bind(usersAPI), dispatch);
};

export const unFollowThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(userId, unFollowAC, usersAPI.unFollow.bind(usersAPI), dispatch);
};