import styles from './Sidebar.module.css'

import {About} from './About';
import {Friends} from './Friends';

import { SidebarType} from '../../../types';

type PropsType = {
    state: SidebarType
}

export const Sidebar = (props: PropsType) => {
    return (
        <div className={styles.root}>
            <About about={props.state.about}/>
            <Friends friends={props.state.friends}/>
        </div>
    )
}