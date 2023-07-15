import React from 'react';
import {connect} from 'react-redux';

import {AppStateType} from '../../../redux/redux-store';
import {Header} from '../Header';
import {logoutThunkCreator} from '../../../redux/thunks/authThunk';


export class HeaderContainerAPI extends React.Component<HeaderPropsType> {
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
    logOut: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    logOut: logoutThunkCreator
})(HeaderContainerAPI)