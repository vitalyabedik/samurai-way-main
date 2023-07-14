import {Dispatch} from 'redux'

import {authAPI} from '../../api';
import {setAuthUserDataAC} from '../actions/authAction';
import {FormDataType} from '../../components/Login';
import {AppThunkDispatch, AppThunkType} from '../redux-store';

export const getAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    dispatch(setAuthUserDataAC(id, email, login, true))
                }
            })
    }
}

export const loginThunkCreator = (data: FormDataType): AppThunkType => {
    return (dispatch: AppThunkDispatch) => {
        authAPI.login(data)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator())
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.logOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                }
            })
    }
}

