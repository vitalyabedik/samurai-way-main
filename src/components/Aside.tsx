import React from 'react';

import styles from './Aside.module.css';

export const Aside: React.FC = () => {
    return (
        <aside className={styles.root}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <a className={styles.link} href="#">Profile</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">Messages</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">News</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">Music</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="#">Settings</a>
                </li>
            </ul>
        </aside>
    )
}