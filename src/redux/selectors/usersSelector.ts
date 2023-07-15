import {AppStateType} from '../redux-store';

import {UserType} from '../../types/usersPageTypes';
import {FollowingInProgressType} from '../reducers/usersReducer';

export const getUsers = (state: AppStateType): UserType[]  => state.usersPage.users

export const getPageSize = (state: AppStateType): number  => state.usersPage.pageSize

export const getTotalUsersCount = (state: AppStateType): number  => state.usersPage.totalUsersCount

export const getCurrentPage = (state: AppStateType): number  => state.usersPage.currentPage

export const getIsLoading = (state: AppStateType): boolean => state.usersPage.isLoading

export const getFollowingInProgress = (state: AppStateType): FollowingInProgressType => state.usersPage.followingInProgress