import styles from './Sidebar.module.css'

import {About} from './About/About';
import {Friends} from './Friends/Friends';
import {UserType} from '../../../types/profilePage/profilePageTypes';

type PropsType = {
    users: UserType[]
}

export const Sidebar = (props: PropsType) => {
    return (
        <div className={styles.root}>
            <About users={props.users}/>
            <Friends/>
        </div>
    )
}