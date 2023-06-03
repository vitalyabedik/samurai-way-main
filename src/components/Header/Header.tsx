import {NavLink} from 'react-router-dom';

import styles from './Header.module.css';

import menuIcon from '../../assets/images/header/icon-menu.svg';
import logo from '../../assets/images/header/logo.png';
import iconSearch from '../../assets/images/header/icon-search.svg';
import {HeaderPropsType} from './HeaderContainer';


export const Header = (props: HeaderPropsType) => {
    const {isAuth, login} = props
    return (
        <header className={styles.root}>
            <div className={styles.mainBlock}>
                <div className={styles.logoBlock}>
                    <div className={styles.menuIcon}>
                        <img src={menuIcon} alt="menu"/>
                    </div>
                    <div className={styles.menuLogo}>
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
                <div className={styles.searchBlock}>
                    <div className={styles.searchIcon}>
                        <img src={iconSearch} alt="icon-search"/>
                    </div>
                    <input className={styles.searchInput} placeholder="Search for Friends , music and more.."/>
                </div>
            </div>
            <div className={styles.loginBlock}>
                {isAuth
                    ? login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}