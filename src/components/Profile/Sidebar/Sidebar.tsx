import styles from './Sidebar.module.css'

import {About} from './About/About';
import {Friends} from './Friends/Friends';
import {UsersType} from '../../../index';

type PropsType = {
    users: UsersType
}

export const Sidebar = (props: PropsType) => {
    return (
        <div className={styles.root}>
            <About users={props.users}/>
            <Friends/>
        </div>
    )
}