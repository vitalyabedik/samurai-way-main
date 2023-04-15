import styles from './Aside.module.css';

import {Contacts} from './Contacts/Contacts';
import {Navbar} from './Navbar/Navbar';
import {AsideType} from '../../types';

type PropsType = {
    state: AsideType
}

export const Aside = (props: PropsType) => {
    return (
        <aside className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.navbar}>
                    <Navbar/>
                </div>
                <div className={styles.contacts}>
                    <Contacts contacts={props.state.contacts}/>
                </div>
            </div>
        </aside>
    )
}