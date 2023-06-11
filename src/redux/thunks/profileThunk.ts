import {Dispatch} from 'redux';

import {profileAPI} from '../../api';
import {setUserProfileAC} from '../actions/profileAction';


export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            })
    }
}

