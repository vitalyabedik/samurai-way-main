import styles from './Sidebar.module.css'

import {About} from './About';
import {Friends} from './Friends';

import {ProfileType, SidebarType} from '../../../types';

type PropsType = {
    state: SidebarType
    profile: ProfileType | null
}

export const Sidebar = (props: PropsType) => {
    const {state, profile} = props

    return (
        <div className={styles.root}>
            <About about={state.about} profile={profile}/>
            <Friends friends={state.friends}/>
        </div>
    )
}