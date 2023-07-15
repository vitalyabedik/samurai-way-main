import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';

import styles from './App.module.css';

import {HeaderContainer} from '../components/Header/HeaderContainer';
import {Music} from '../components/Music';
import {News} from '../components/News';
import {Settings} from '../components/Settings';
import {ProfileContainer} from '../components/Profile/ProfileContainer';
import {DialogsContainer} from '../components/Dialogs/DialogsContainer';
import {AsideContainer} from '../components/Aside/AsideContainer';
import {UsersContainer} from '../components/Users/UsersContainer';
import {LoginContainer} from '../components/Login';
import {inititializeThunkCreator} from '../redux/thunks/appThunk';
import {AppStateType} from '../redux/redux-store';
import {Preloader} from '../components/common';

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.isInitialized) return <Preloader/>

        return (
            <div className={styles.root}>
                <HeaderContainer/>
                <div className={styles.container}>
                    <AsideContainer/>
                    <div className={styles.content}>
                        <Switch>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/messages" render={() => <DialogsContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>

                            <Route path="/login" render={() => <LoginContainer/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    isInitialized: boolean
}

type MapDispatchToProps = {
    initialize: () => void
}

export type AppPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isInitialized: state.app.isInitialized,
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {
        initialize: inititializeThunkCreator
    }))(App)
