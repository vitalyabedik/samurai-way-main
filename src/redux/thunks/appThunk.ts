import {AppThunkDispatch, AppThunkType} from '../redux-store';

import {getAuthUserDataThunkCreator} from './authThunk';
import {setAppInitializedAC} from '../actions/appAction';

export const inititializeThunkCreator = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    const promise = dispatch(getAuthUserDataThunkCreator())

    await promise
    dispatch(setAppInitializedAC())
}



