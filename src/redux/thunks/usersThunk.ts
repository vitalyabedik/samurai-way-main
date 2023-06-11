import {Dispatch} from 'redux';

import {usersAPI} from '../../api';
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    setUsersFollowingAC,
    setUsersLoadingAC, unFollowAC
} from '../actions/usersAction';

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setUsersLoadingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsersLoadingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUserCountAC(data.totalCount))
            })
    }
}

export const followThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setUsersFollowingAC(userId, true))
        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
            })
        dispatch(setUsersFollowingAC(userId, false))
    }
}

export const unFollowThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(setUsersFollowingAC(userId, true))
        usersAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowAC(userId))
                }
            })
        dispatch(setUsersFollowingAC(userId, false))
    }
}

// export const changePageThunkCreator = (currentPage: number, pageSize: number) => {
//     return (dispatch: Dispatch) => {
//         dispatch(setCurrentPageAC(currentPage))
//        getUsersThunkCreator(currentPage, pageSize)
//     }
// }