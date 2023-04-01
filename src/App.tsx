import React from 'react';
import './App.css';

import {Header} from './components/Header';
import {Aside} from './components/Aside';
import {Profile} from './components/Profile';


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="container">
                <Aside/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
