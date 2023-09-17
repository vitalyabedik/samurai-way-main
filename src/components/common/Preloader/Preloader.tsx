import React from 'react';

import styles from './Preloader.module.css'

export const Preloader: React.FC = () => {
    return (
        <div  className={styles.root}>
        <span className={styles.loader}></span>
        </div>
    );
};

