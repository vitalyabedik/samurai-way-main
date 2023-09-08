import {Dispatch} from 'redux';

import {profileAPI} from '../../api';
import {savePhotoSuccessAC, setUserProfileAC, setUserStatusAC} from '../actions/profileAction';
import {ProfileType} from '../../types';
import {AppStateType, AppThunkType} from '../../redux/redux-store';
import {stopSubmit} from 'redux-form';
import {ResultCode} from '../../api/instance';

export const getUserProfileThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(data))
}

export const getUserStatusThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(data))
}

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.updateStatus(status)

    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(setUserStatusAC(status))
    }
}

export const savePhotoThunkCreator = (file: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.savePhoto(file)

    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(savePhotoSuccessAC(data.data.photos))
    }
}

export const updateProfileTC = (profile: ProfileType): AppThunkType => async (dispatch, getState: () => AppStateType) => {
    const userId = getState().auth.userId

    if (!userId) {
        console.warn('userId not found in the state')
        return
    }

    const data = await profileAPI.updateProfile(profile)

    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(getUserProfileThunkCreator(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0] || 'Incorrect data'}))
        // распарсить строку и сформировать объект
        // dispatch(stopSubmit('edit-profile', {'contacts': {facebook: res.data.messages[0]}}))

        return Promise.reject(data.messages[0])
    }
}

