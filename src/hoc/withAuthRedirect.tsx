import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {AppStateType} from '../redux/redux-store';

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirectComponent<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        const {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}