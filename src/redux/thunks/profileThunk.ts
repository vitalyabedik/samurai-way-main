import {Dispatch} from 'redux';

import {profileAPI} from '../../api';
import {setUserProfileAC, setUserStatusAC} from '../actions/profileAction';


export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}

export const getUserStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatusAC(data))
            })
    }
}

export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}

