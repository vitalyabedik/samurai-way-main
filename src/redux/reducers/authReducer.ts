import {AUTH_SET_USER_DATA} from '../actions/actionTypes';
import {AuthActionType} from '../actions/authAction';

export type AuthMeType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthMeType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case (AUTH_SET_USER_DATA): {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

