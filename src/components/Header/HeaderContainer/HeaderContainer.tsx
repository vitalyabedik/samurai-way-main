import React from 'react';
import {connect} from 'react-redux';

import {AppStateType} from '../../../redux/redux-store';
import {Header} from '../Header';
import {getAuthUserDataThunkCreator} from '../../../redux/thunks/authThunk';


export class HeaderContainerAPI extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    getAuthUserData: getAuthUserDataThunkCreator
})(HeaderContainerAPI)