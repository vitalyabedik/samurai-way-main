import {AppStateType} from '../redux-store';
import {createSelector} from 'reselect';

import {UserType} from '../../types/usersPageTypes';
import {FilterType, FollowingInProgressType} from '../reducers/usersReducer';

export const getUsersSelector = (state: AppStateType): UserType[] => state.usersPage.users

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType): number => state.usersPage.pageSize

export const getTotalUsersCount = (state: AppStateType): number => state.usersPage.totalUsersCount

export const getCurrentPage = (state: AppStateType): number => state.usersPage.currentPage

export const getIsLoading = (state: AppStateType): boolean => state.usersPage.isLoading

export const getFollowingInProgress = (state: AppStateType): FollowingInProgressType => state.usersPage.followingInProgress

export const getUsersFilter = (state: AppStateType): FilterType => state.usersPage.filter


