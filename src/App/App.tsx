import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import styles from './App.module.css';

import {Header} from '../components/Header';
import {Aside} from '../components/Aside';
import {Profile} from '../components/Profile';
import {Dialogs} from '../components/Dialogs';
import {Music} from '../components/Music';
import {News} from '../components/News';
import {Settings} from '../components/Settings';
import {StateType} from '../redux/state';


type PropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

export const App = (props: PropsType) => {
    const {state, addPost, updateNewPostText, addMessage, updateNewMessageText} = props
    const {aside, dialogsPage} = props.state

    return (
        <BrowserRouter>
            <div className={styles.root}>
                <Header/>
                <div className={styles.container}>
                    <Aside state={aside}/>
                    <div className={styles.content}>
                        <Switch>
                            <Route path="/profile" render={() =>
                                <Profile state={state}
                                         addPost={addPost}
                                         updateNewPostText={updateNewPostText}
                                />}
                            />
                            <Route path="/messages" render={() => <Dialogs state={dialogsPage}
                                                                           addMessage={addMessage}
                                                                           updateNewMessageText={updateNewMessageText}
                                                                    />}
                            />
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


