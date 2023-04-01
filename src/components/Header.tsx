import React from 'react';
import logo from '../assets/images/logo.svg';


export const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo"/>
        </header>
    )
}