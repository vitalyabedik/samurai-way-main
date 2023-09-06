import {AppThunkDispatch, AppThunkType} from '../redux-store';

import {getAuthUserDataTC} from './authThunk';
import {setAppInitializedAC} from '../actions/appAction';

export const inititializeTC = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    try {
        await dispatch(getAuthUserDataTC())
        dispatch(setAppInitializedAC())
    } catch (e) {
        console.error(e)
    }
}



