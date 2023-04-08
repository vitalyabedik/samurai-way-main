import React from 'react';

import styles from './App.module.css';

import {Header} from './components/Header/Header';
import {Aside} from './components/Aside/Aside';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';


const App = () => {
    return (
        <div className={styles.root}>
            <Header/>
            <div className={styles.container}>
                <Aside/>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;
