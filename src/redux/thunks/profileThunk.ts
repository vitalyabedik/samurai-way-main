import {Dispatch} from 'redux';

import {profileAPI} from '../../api';
import {savePhotoSuccessAC, setUserProfileAC, setUserStatusAC} from '../actions/profileAction';
import {ProfileType} from '../../types';
import {AppStateType, AppThunkType} from '../../redux/redux-store';
import {stopSubmit} from 'redux-form';

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

    if (res.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}

export const savePhotoThunkCreator = (file: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.savePhoto(file)

    if (res.resultCode === 0) {
        dispatch(savePhotoSuccessAC(res.data.photos))
    }
}

export const updateProfileTC = (profile: ProfileType): AppThunkType  => async (dispatch, getState: () => AppStateType) => {
    const userId = getState().auth.userId

    if (!userId) {
        console.warn('userId not found in the state')
        return
    }

    const res = await profileAPI.updateProfile(profile)

    if (res.data.resultCode === 0) {
        dispatch(getUserProfileThunkCreator(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}))
        // распарсить строку и сформировать объект
        // dispatch(stopSubmit('edit-profile', {'contacts': {facebook: res.data.messages[0]}}))

        return Promise.reject(res.data.messages[0])
    }
}

