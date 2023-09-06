import React from 'react';
import {connect} from 'react-redux';

import {AppStateType} from '../../../redux/redux-store';
import {Header} from '../Header';
import {logoutTC} from '../../../redux/thunks/authThunk';
import {ProfileType} from '../../../types';

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
    profile: ProfileType | null
}

type MapDispatchToProps = {
    logOut: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    logOut: logoutTC
})(HeaderContainerAPI)