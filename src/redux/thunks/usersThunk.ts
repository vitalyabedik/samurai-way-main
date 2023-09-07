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

export const getUsersTC = (currentPage: number, pageSize: number, isFriend: {value: boolean} | undefined) => async (dispatch: Dispatch) => {
    dispatch(setUsersLoadingAC(true))

    const data = await usersAPI.getUsers(currentPage, pageSize, isFriend)

    dispatch(setUsersLoadingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUserCountAC(data.totalCount))
}

export const changePageTC = (currentPage: number, pageSize: number): AppThunkType => (dispatch: AppThunkDispatch) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(getUsersTC(currentPage, pageSize, undefined))
}

export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(userId, followAC, usersAPI.follow.bind(usersAPI), dispatch);
};

export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(userId, unFollowAC, usersAPI.unFollow.bind(usersAPI), dispatch);
};

