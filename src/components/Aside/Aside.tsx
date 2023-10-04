import {useLocation} from 'react-router-dom';

import styles from './Aside.module.css';

import {Contacts} from './Contacts';
import {Navbar} from './Navbar';
import {AsidePropsType} from './AsideContainer';


export const Aside = (props: AsidePropsType) => {
    const {users} = props

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.navbar}>
                    <Navbar/>
                </div>
                {currentPath === '/profile' && <div className={styles.contacts}>
                    <Contacts contacts={users}/>
                </div>}
            </div>
        </aside>
    )
}
