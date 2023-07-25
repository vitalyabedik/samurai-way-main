import {AppThunkDispatch, AppThunkType} from '../redux-store';

import {getAuthUserDataTC} from './authThunk';
import {setAppInitializedAC} from '../actions/appAction';

export const inititializeTC = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    const promise = dispatch(getAuthUserDataTC())

    await promise
    dispatch(setAppInitializedAC())
}



