import {AUTH_GET_CAPTCHA_URL, AUTH_SET_USER_DATA,} from './actionTypes';

export type AuthActionType = setAuthUserDataACType | getCaptchaUrlACType

export type setAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: AUTH_SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
} as const)

export type getCaptchaUrlACType = ReturnType<typeof getCaptchaUrlAC>
export const getCaptchaUrlAC = (captchaUrl: string) => ({
    type: AUTH_GET_CAPTCHA_URL,
    payload: {
        captchaUrl
    }
} as const)

