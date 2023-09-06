import {Dispatch} from 'redux';

import {followACType, setUsersFollowingAC, unFollowACType} from '../../redux/actions/usersAction';
import {ResultCode} from '../../api/instance';

type FollowUnfollowAction = followACType | unFollowACType;

export const followUnfollow = async (userId: number, actionCreator: (userId: number) => FollowUnfollowAction, apiMethod: (userId: number) => Promise<any>, dispatch: Dispatch) => {
    dispatch(setUsersFollowingAC(userId, true));

    const data = await apiMethod(userId);
    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(actionCreator(userId));
    }

    dispatch(setUsersFollowingAC(userId, false));
}