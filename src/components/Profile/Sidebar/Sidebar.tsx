import styles from './Sidebar.module.css'

import {About} from './About';
import {Friends} from './Friends';

import {ProfileType, SidebarType} from '../../../types';
import {ProfileDataFormType} from '../../Profile/ProfileDataForm';

type PropsType = {
    state: SidebarType
    profile: ProfileType | null
    isOwner: boolean
    updateProfile: (profile: ProfileDataFormType) => Promise<any>
}

export const Sidebar = (props: PropsType) => {
    const {state, profile, isOwner, updateProfile} = props

    return (
        <div className={styles.root}>
            <About about={state.about}
                   profile={profile}
                   isOwner={isOwner}
                   updateProfile={updateProfile}
            />
            <Friends friends={state.friends}/>
        </div>
    )
}