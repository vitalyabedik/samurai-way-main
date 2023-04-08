import {NavLink} from 'react-router-dom';

import styles from './Aside.module.css';

export const Aside = () => {
    return (
        <aside className={styles.root}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <NavLink to="/profile" className={styles.link} activeClassName={styles.link_active}>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/messages" className={styles.link} activeClassName={styles.link_active}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news" className={styles.link} activeClassName={styles.link_active}>News</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" className={styles.link} activeClassName={styles.link_active}>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" className={styles.link} activeClassName={styles.link_active}>Settings</NavLink>
                </li>
            </ul>
        </aside>
    )
}