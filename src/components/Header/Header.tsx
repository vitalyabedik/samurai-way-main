import React from 'react';

import styles from './Header.module.css';

import logo from '../../assets/images/logo.svg';


export const Header: React.FC = () => {
    return (
        <header className={styles.root}>
            <img src={logo} alt="logo"/>
        </header>
    )
}