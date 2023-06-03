import React from 'react';
import {connect} from 'react-redux';

import {AppStateType} from '../../../redux/redux-store';
import {Header} from '../Header';
import {setAuthUserDataAC} from '../../../redux/actions/authAction';
import {authAPI} from '../../../api';


export class HeaderContainerAPI extends React.Component<HeaderPropsType> {
    componentDidMount() {
        authAPI.checkAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToProps = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData: setAuthUserDataAC
})(HeaderContainerAPI)