import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import styles from './App.module.css';

import {Header} from './components/Header/Header';
import {Aside} from './components/Aside/Aside';
import {Profile} from './components/Profile/Profile';
import {Messages} from './components/Messages/Messages';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.root}>
                <Header/>
                <div className={styles.container}>
                    <Aside/>
                    <Switch>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
