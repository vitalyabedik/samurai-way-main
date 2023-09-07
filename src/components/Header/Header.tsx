import {NavLink} from 'react-router-dom';

import styles from './Header.module.css';

import menuIcon from '../../assets/images/header/icon-menu.svg';
import logoutIcon from '../../assets/images/header/icon-logout.svg';
import logo from '../../assets/images/header/logo.png';
import iconSearch from '../../assets/images/header/icon-search.svg';
import {HeaderPropsType} from './HeaderContainer';

export const Header = (props: HeaderPropsType) => {
    const {isAuth, logOut,  login} = props

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
            {isAuth
                ?
                <div className={styles.loginBlock}>
                     {login && <div className={styles.loginName}>{login}</div>}
                    <button className={styles.button} onClick={logOut}>
                        <img src={logoutIcon} alt="logout"/>
                    </button>
                </div>
                :
                <NavLink className={styles.navlink} to={'/login'}>Login</NavLink>
            }
        </header>
    )
}