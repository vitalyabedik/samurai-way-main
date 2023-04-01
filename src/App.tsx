import React from 'react';
import './App.css';

import logo from './assets/images/logo.svg'
import profileBackground from './assets/images/profile-background.png'


const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src={logo} alt="logo"/>
            </header>
            <div className="container">
                <aside className="aside">
                    <ul className="navigation__items">
                        <li className="navigation__item">
                            <a className="navigation__link" href="#">Profile</a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__link" href="#">Messages</a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__link" href="#">News</a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__link" href="#">Music</a>
                        </li>
                        <li className="navigation__item">
                            <a className="navigation__link" href="#">Settings</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <img src={profileBackground} alt="profile-background"/>
                    <div>avatar + descr</div>
                    <div>My posts</div>
                    <div>New post</div>
                    <div>
                        <div>Post1</div>
                        <div>Post2</div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
