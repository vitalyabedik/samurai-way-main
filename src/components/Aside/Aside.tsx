import React from 'react';

import styles from './Aside.module.css';

export const Aside: React.FC = () => {
    return (
        <aside className={styles.root}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <a className={styles.link} href="src/components#">Profile</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="src/components#">Messages</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="src/components#">News</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="src/components#">Music</a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href="src/components#">Settings</a>
                </li>
            </ul>
        </aside>
    )
}