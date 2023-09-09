import {NavLink} from 'react-router-dom';

import styles from './Navbar.module.css';

import iconProfile from '../../../assets/images/aside/icon-profile.svg';
import iconMessages from '../../../assets/images/aside/icon-messages.svg';
import iconUsers from '../../../assets/images/aside/icon-users.svg';
import iconNews from '../../../assets/images/aside/icon-news.svg';
import iconMusic from '../../../assets/images/aside/icon-music.svg';
import iconSettings from '../../../assets/images/aside/icon-settings.svg';

export const Navbar = () => {
    return (
        <ul className={styles.items}>
            <li className={styles.item}>
                <NavLink to="/profile" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconProfile} alt="icon-profile"/>
                    </div>
                    <span className={styles.span}>Profile</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/users" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconUsers} alt="icon-users"/>
                    </div>
                    <span className={styles.span}>Users</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/messages" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconMessages} alt="icon-messages"/>
                    </div>
                    <span className={styles.span}>Messages</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/news" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconNews} alt="icon-news"/>
                    </div>
                    <span className={styles.span}>News</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/music" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconMusic} alt="icon-music"/>
                    </div>
                    <span className={styles.span}>Music</span>
                </NavLink>
            </li>
            <li className={styles.item}>
                <NavLink to="/settings" className={styles.item__link} activeClassName={styles.item__link_active}>
                    <div className={styles.item__image}>
                        <img src={iconSettings} alt="icon-settings"/>
                    </div>
                    <span className={styles.span}>Settings</span>
                </NavLink>
            </li>
        </ul>
    )
}