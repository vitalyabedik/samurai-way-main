import {
    USERS_FOLLOW,
    USERS_FOLLOWING_IN_PROGRESS,
    USERS_IS_LOADING,
    USERS_SET,
    USERS_SET_CURRENT_PAGE,
    USERS_SET_TOTAL_COUNT,
    USERS_UNFOLLOW
} from '../actions/actionTypes';
import {UserType} from '../../types/usersPageTypes';
import {ActionTypes} from '../actions/actionCreatorsTypes';

export type FollowingInProgressType = number[];

const initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [] as FollowingInProgressType
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case (USERS_FOLLOW) : {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId
                    ? {...user, followed: true}
                    : user
                )
            }
        }
        case (USERS_UNFOLLOW) : {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId
                    ? {...user, followed: false}
                    : user
                )
            }
        }
        case (USERS_SET) : {
            return {
                ...state,
                users: action.payload.users
            }
        }
        case (USERS_SET_CURRENT_PAGE) : {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case (USERS_SET_TOTAL_COUNT): {
            return {
                ...state,
                totalUsersCount: action.payload.totalUsersCount
            }
        }
        case (USERS_IS_LOADING): {
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        }
        case (USERS_FOLLOWING_IN_PROGRESS): {
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }

        default:
            return state;
    }
}