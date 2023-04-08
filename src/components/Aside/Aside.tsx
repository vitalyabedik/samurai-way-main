import {Link} from 'react-router-dom';

import styles from './Aside.module.css';

export const Aside = () => {
    return (
        <aside className={styles.root}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <Link to="/profile" className={styles.link}>Profile</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/messages" className={styles.link}>Messages</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/news" className={styles.link}>News</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/music" className={styles.link}>Music</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/settings" className={styles.link}>Settings</Link>
                </li>
            </ul>
        </aside>
    )
}