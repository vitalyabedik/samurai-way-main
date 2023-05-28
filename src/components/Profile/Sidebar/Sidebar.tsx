import styles from './Sidebar.module.css'

import {About} from './About';
import {Friends} from './Friends';

import {ProfileType, SidebarType} from '../../../types';

type PropsType = {
    state: SidebarType
    profile: ProfileType | null
}

export const Sidebar = (props: PropsType) => {
    const {profile} = props

    return (
        <div className={styles.root}>
            <About about={props.state.about} profile={profile}/>
            <Friends friends={props.state.friends}/>
        </div>
    )
}