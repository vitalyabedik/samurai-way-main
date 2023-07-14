import {Dispatch} from 'redux'
import {stopSubmit} from 'redux-form';

import {authAPI} from '../../api';
import {setAuthUserDataAC} from '../actions/authAction';
import {FormDataType} from '../../components/Login';
import {AppThunkDispatch, AppThunkType} from '../redux-store';

export const getAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(res => {
                if (res.resultCode === 0) {
                    const {id, email, login} = res.data
                    dispatch(setAuthUserDataAC(id, email, login, true))
                }
            })
    }
}

export const loginThunkCreator = (data: FormDataType): AppThunkType => {
    return (dispatch: AppThunkDispatch) => {
        authAPI.login(data)
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator())
                } else {
                    const message = res.messages.length > 0 ? res.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.logOut()
            .then(res => {
                if (res.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                }
            })
    }
}

