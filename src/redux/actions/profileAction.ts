import {
    PROFILE_POST_ADD,
    PROFILE_POST_DELETE,
    PROFILE_GET_STATUS,
    PROFILE_SET_USER_PROFILE, PROFILE_PHOTO_SAVE_SUCCESS,
} from './actionTypes';
import {ProfileType} from '../../types';
import {PhotosType} from '../../types/usersPageTypes';


export type ProfileActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof savePhotoSuccessAC>

export const addPostAC = (newPostText: string) => ({
    type: PROFILE_POST_ADD,
    payload: {
        newPostText
    }
} as const)

export const deletePostAC = (postId: number) => ({
    type: PROFILE_POST_DELETE,
    payload: {
        postId
    }
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

export const savePhotoSuccessAC = (photos: PhotosType) => ({
    type: PROFILE_PHOTO_SAVE_SUCCESS,
    payload: {
        photos
    }
} as const)

