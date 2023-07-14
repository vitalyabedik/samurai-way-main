import {Dispatch} from 'redux';

import {profileAPI} from '../../api';
import {setUserProfileAC, setUserStatusAC} from '../actions/profileAction';


export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(res => {
                dispatch(setUserProfileAC(res))
            })
    }
}

export const getUserStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setUserStatusAC(res))
            })
    }
}

export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}

