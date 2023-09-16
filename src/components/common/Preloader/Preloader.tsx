import React from 'react';

import styles from './Preloader.module.css'

export const Preloader: React.FC = () => {
    return (
        <span className={styles.loader}></span>
    );
};

