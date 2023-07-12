import {
    POST_ADD,
    PROFILE_GET_STATUS,
    PROFILE_SET_USER_PROFILE,
} from './actionTypes';
import {ProfileType} from '../../types';

export type ProfileActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>

export const addPostAC = (newPostText: string) => ({
    type: POST_ADD,
    newPostText
} as const)

export const setUserProfileAC = (profile: ProfileType | null) => ({
    type: PROFILE_SET_USER_PROFILE,
    payload: {
        profile
    }
} as const)

export const setUserStatusAC = (status: string) => ({
    type: PROFILE_GET_STATUS,
    payload: {
        status
    }
} as const)

