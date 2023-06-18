import {
    POST_ADD,
    POST_UPDATE_NEW_TEXT,
    PROFILE_GET_STATUS,
    PROFILE_SET_USER_PROFILE,
} from './actionTypes';
import {ProfileType} from '../../types';

export type ProfileActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>

export const addPostAC = () => ({
    type: POST_ADD
} as const)

export const changeNewPostTextAC = (newText: string) => ({
    type: POST_UPDATE_NEW_TEXT,
    newText
} as const);

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

