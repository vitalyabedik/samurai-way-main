import {AUTH_SET_USER_DATA,} from './actionTypes';

export type AuthActionType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (userId: number, email: string, login: string) => ({
    type: AUTH_SET_USER_DATA,
    payload: {
        userId,
        email,
        login
    }
} as const)

