import {USERS_FOLLOW, USERS_SET, USERS_UNFOLLOW} from './actionTypes';
import {UserType} from '../../types/usersPageTypes';

export type UsersActionType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({
    type: USERS_FOLLOW,
    payload: {
        userId
    }
} as const)

export const unFollowAC = (userId: number) => ({
    type: USERS_UNFOLLOW,
    payload: {
        userId
    }
} as const);

export const setUsersAC = (users: UserType[]) => ({
    type: USERS_SET,
    payload: {
        users
    }
} as const);