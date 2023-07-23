import React from 'react';

import styles from './Preloader.module.css'

import preloader from '../../../assets/images/preloader.gif'

export const Preloader = () => {
    return (
        <div className={styles.root}>
            <img src={preloader}/>
        </div>
    );
};

