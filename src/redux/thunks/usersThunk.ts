import {Dispatch} from 'redux';

import {usersAPI} from '../../api';
import {
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    setUsersLoadingAC,
    followAC,
    unFollowAC, setUsersFilterAC,
} from '../actions/usersAction';
import {followUnfollow} from '../../utils/followUnfollow';

export const getUsersTC = ({pageSize,currentPage,isFriend,term}:{
                               currentPage: number,
                               pageSize: number,
                               term: string,
                               isFriend?: {value: boolean} },
) => async (dispatch: Dispatch) => {
    dispatch(setUsersLoadingAC(true))
    dispatch(setCurrentPageAC(currentPage))

    dispatch(setUsersFilterAC(term))

    const data = await usersAPI.getUsers(currentPage, pageSize, isFriend, term)

    dispatch(setUsersLoadingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUserCountAC(data.totalCount))
}

export const followTC = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(userId, followAC, usersAPI.follow.bind(usersAPI), dispatch);
};

export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollow(userId, unFollowAC, usersAPI.unFollow.bind(usersAPI), dispatch);
};



// ===============================

// import {Dispatch} from 'redux';
//
// import {usersAPI} from '../../api';
// import {
//     setCurrentPageAC,
//     setTotalUserCountAC,
//     setUsersAC,
//     setUsersLoadingAC,
//     followAC,
//     unFollowAC, setUsersFilterAC,
// } from '../actions/usersAction';
//
// import {followUnfollow} from '../../utils/followUnfollow';
// import {FilterType} from '../../redux/reducers/usersReducer';
//
// export const getUsersTC = (
//     currentPage: number,
//     pageSize: number,
//     isFriend: { value: boolean } | undefined,
//     filter: FilterType
// ) => async (dispatch: Dispatch) => {
//     dispatch(setUsersLoadingAC(true))
//     dispatch(setCurrentPageAC(currentPage))
//
//     debugger
//     dispatch(setUsersFilterAC(filter))
//
//     debugger
//     const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
//
//     dispatch(setUsersLoadingAC(false))
//     dispatch(setUsersAC(data.items))
//     dispatch(setTotalUserCountAC(data.totalCount))
// }
//
// // export const changePageTC = (currentPage: number, pageSize: number): AppThunkType => (dispatch: AppThunkDispatch) => {
// //     dispatch(setCurrentPageAC(currentPage))
// //     dispatch(getUsersTC(currentPage, pageSize, undefined))
// // }
//
// export const followTC = (userId: number) => async (dispatch: Dispatch) => {
//     await followUnfollow(userId, followAC, usersAPI.follow.bind(usersAPI), dispatch);
// };
//
// export const unFollowTC = (userId: number) => async (dispatch: Dispatch) => {
//     await followUnfollow(userId, unFollowAC, usersAPI.unFollow.bind(usersAPI), dispatch);
// };

