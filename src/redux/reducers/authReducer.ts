import {AUTH_GET_CAPTCHA_URL, AUTH_SET_USER_DATA} from '../actions/actionTypes';
import {AuthActionType} from '../actions/authAction';

export type AuthMeType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

const initialState: AuthMeType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
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
        case (AUTH_GET_CAPTCHA_URL): {
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl
            }
        }
        default:
            return state
    }
}

