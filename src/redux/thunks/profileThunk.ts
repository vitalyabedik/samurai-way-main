import {Dispatch} from 'redux';

import {profileAPI} from '../../api';
import {setUserProfileAC, setUserStatusAC} from '../actions/profileAction';


export const getUserProfileThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(res))
}

export const getUserStatusThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(res))
}

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)

    if (res.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}

