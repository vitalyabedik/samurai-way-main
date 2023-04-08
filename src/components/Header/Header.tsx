import styles from './Header.module.css';

import logo from '../../assets/images/logo.svg';


export const Header = () => {
    return (
        <header className={styles.root}>
            <img src={logo} alt="logo"/>
        </header>
    )
}