import styles from './Sidebar.module.css'

import {About} from './About';
import {Friends} from './Friends';

import {ProfileType, SidebarType} from '../../../types';

type PropsType = {
    state: SidebarType
    profile: ProfileType | null
    isOwner: boolean
}

export const Sidebar = (props: PropsType) => {
    const {state, profile, isOwner} = props

    return (
        <div className={styles.root}>
            <About about={state.about} profile={profile} isOwner={isOwner}/>
            <Friends friends={state.friends}/>
        </div>
    )
}