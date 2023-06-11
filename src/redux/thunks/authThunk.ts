import {Dispatch} from 'redux'

import {authAPI} from '../../api';
import {setAuthUserDataAC} from '../actions/authAction';


export const getAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.checkAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    dispatch(setAuthUserDataAC(id, email, login))
                }
            })
    }
}

