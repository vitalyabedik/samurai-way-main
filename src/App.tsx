import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import styles from './App.module.css';

import {Header} from './components/Header/Header';
import {Aside} from './components/Aside/Aside';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {StateType} from './redux/state';


type PropsType = {
   state: StateType
}

export const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className={styles.root}>
                <Header/>
                <div className={styles.container}>
                    <Aside state={props.state.aside}/>
                    <div className={styles.content}>
                        <Switch>
                            <Route path="/profile" render={() =>
                                <Profile state={props.state.profilePage}/>
                            }/>
                            <Route path="/messages" render={() =>
                                <Dialogs state={props.state.dialogsPage}/>
                            }/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


