import avatar1 from '../../assets/images/profile/avatars/avatar-1.jpg';
import avatar2 from '../../assets/images/profile/avatars/avatar-2.jpg';
import avatar3 from '../../assets/images/profile/avatars/avatar-3.jpg';
import avatar4 from '../../assets/images/profile/avatars/avatar-4.jpg';
import avatar5 from '../../assets/images/profile/avatars/avatar-5.jpg';
import avatar6 from '../../assets/images/profile/avatars/avatar-6.jpg';
import avatar7 from '../../assets/images/profile/avatars/avatar-7.jpg';
import avatar8 from '../../assets/images/profile/avatars/avatar-8.jpg';

import {USERS_FOLLOW, USERS_SET, USERS_UNFOLLOW} from '../actions/actionTypes';
import {UserType} from '../../types/usersPageTypes';
import {ActionTypes} from '../actions/actionCreatorsTypes';

const initialState = {
    users: [] as UserType[]
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
                users: [...state.users, ...action.payload.users]
            }
        }
        default:
            return state;
    }
}