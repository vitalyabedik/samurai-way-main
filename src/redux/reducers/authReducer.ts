import {AuthMeType} from '../../types';
import {AUTH_SET_USER_DATA} from '../actions/actionTypes';
import {AuthActionType} from '../actions/authAction';

let initialState: AuthMeType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActionType): AuthMeType => {
    switch (action.type) {
        case (AUTH_SET_USER_DATA): {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        default:
            return state
    }
}