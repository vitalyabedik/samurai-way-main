import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';

import styles from './App.module.css';

import {HeaderContainer} from '../components/Header/HeaderContainer';
import {Music} from '../components/Music';
import {News} from '../components/News';
import {Settings} from '../components/Settings';
import {AsideContainer} from '../components/Aside/AsideContainer';
import {inititializeTC} from '../redux/thunks/appThunk';
import {AppStateType} from '../redux/redux-store';
import {Preloader} from '../components/common';
import {withSuspense} from '../hoc/withSuspense';
import {NotFound404} from '../components/common/NotFound404';

const ProfileContainer = React.lazy(() => import('../components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('../components/Users/UsersContainer'))
const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'))
const LoginContainer = React.lazy(() => import('../components/Login'))

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>

        return (
            <div className={styles.root}>
                {this.props.isAuth && <HeaderContainer/>}
                <div className={styles.container}>
                    {this.props.isAuth && <AsideContainer/>}
                    <div className={styles.content}>
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                            <Route path="/messages" render={withSuspense(DialogsContainer)}/>
                            <Route path="/users" render={withSuspense(UsersContainer)}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>

                            <Route path="/login" render={withSuspense(LoginContainer)}/>
                            <Route path="*" render={() => <NotFound404/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    isInitialized: boolean
    isAuth: boolean
}

type MapDispatchToProps = {
    initialize: () => void
}

export type AppPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isInitialized: state.app.isInitialized,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initialize: inititializeTC,
    }))(App)
