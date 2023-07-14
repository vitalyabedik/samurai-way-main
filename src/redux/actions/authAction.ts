import {AUTH_SET_USER_DATA,} from './actionTypes';

export type AuthActionType = setAuthUserDataTypeAC

export type setAuthUserDataTypeAC = ReturnType<typeof setAuthUserDataAC>
export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: AUTH_SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
} as const)

