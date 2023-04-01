import React from 'react';

import styles from './App.module.css';

import {Header} from './components/Header/Header';
import {Aside} from './components/Aside/Aside';
import {Profile} from './components/Profile/Profile';


const App: React.FC = () => {
    return (
        <div className={styles.root}>
            <Header/>
            <div className={styles.container}>
                <Aside/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
