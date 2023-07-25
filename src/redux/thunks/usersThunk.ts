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

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setUsersLoadingAC(true))

    const res = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setUsersLoadingAC(false))
    dispatch(setUsersAC(res.data.items))
    dispatch(setTotalUserCountAC(res.data.totalCount))
}

export const changePageThunkCreator = (currentPage: number, pageSize: number): AppThunkType => (dispatch: AppThunkDispatch) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(getUsersTC(currentPage, pageSize))
}

export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(userId, followAC, usersAPI.follow.bind(usersAPI), dispatch);
};

export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(userId, unFollowAC, usersAPI.unFollow.bind(usersAPI), dispatch);
};