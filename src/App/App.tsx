import React from 'react';
import {Switch, Route} from 'react-router-dom';

import styles from './App.module.css';

import {Header} from '../components/Header';
import {Aside} from '../components/Aside';
import {Profile} from '../components/Profile';
import {Dialogs} from '../components/Dialogs';
import {Music} from '../components/Music';
import {News} from '../components/News';
import {Settings} from '../components/Settings';
import {store, StoreType} from '../redux/state';

type PropsType = {
    store: StoreType
}

export const App = (props: PropsType) => {
    const state = props.store.getState()
    const {addPost, updateNewPostText, addMessage, updateNewMessageText} = props.store

    return (
        <div className={styles.root}>
            <Header/>
            <div className={styles.container}>
                <Aside state={state.aside}/>
                <div className={styles.content}>
                    <Switch>
                        <Route path="/profile" render={() =>
                            <Profile state={state}
                                     addPost={addPost.bind(store)}
                                     updateNewPostText={updateNewPostText.bind(store)}
                            />}
                        />
                        <Route path="/messages" render={() => <Dialogs state={state.dialogsPage}
                                                                       addMessage={addMessage.bind(store)}
                                                                       updateNewMessageText={updateNewMessageText.bind(store)}
                        />}
                        />
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}


