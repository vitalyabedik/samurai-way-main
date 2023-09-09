import {NavLink, useLocation} from 'react-router-dom';

import styles from './Header.module.css';

import menuIcon from '../../assets/images/header/icon-menu.svg';
import logoutIcon from '../../assets/images/header/icon-logout.svg';
import logo from '../../assets/images/header/logo.png';
import {UsersSearchForm} from '../../components/Users/UsersSearchForm';
import {FilterType} from '../../redux/reducers/usersReducer';
import {ProfileType} from '../../types';

type PropsType = {
    isAuth: boolean
    login: string | null
    profile: ProfileType | null
    logOut: () => void
    onFilterChanged: (filter: FilterType) => void
}

export const Header = (props: PropsType) => {
    const {isAuth, logOut,  login, onFilterChanged} = props

    const location = useLocation();
    const currentPath = location.pathname;

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
                {currentPath === '/users' && <div className={styles.search}>
                    <UsersSearchForm onFilterChanged={onFilterChanged}/>
                    {/*<input className={styles.searchInput} placeholder="Search for users and friends..."/>*/}
                </div>}
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