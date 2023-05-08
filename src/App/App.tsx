import React from 'react';
import {Switch, Route} from 'react-router-dom';

import styles from './App.module.css';

import {Header} from '../components/Header';
import {Aside} from '../components/Aside';
import {Music} from '../components/Music';
import {News} from '../components/News';
import {Settings} from '../components/Settings';
import {ProfileContainer} from '../components/Profile/ProfileContainer';
import {DialogsContainer} from '../components/Dialogs/DialogsContainer';

export const App = () => {
    return (
        <div className={styles.root}>
            <Header/>
            <div className={styles.container}>
                <Aside />
                <div className={styles.content}>
                    <Switch>
                        <Route path="/profile" render={() => <ProfileContainer />}/>
                        <Route path="/messages" render={() => <DialogsContainer />}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}


