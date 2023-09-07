import styles from './Sidebar.module.css'

import {About} from './About';
import {Friends} from './Friends';
import {ProfileType, SidebarType} from '../../../types';
import {ProfileDataFormType} from '../../Profile/ProfileDataForm';
import {UserType} from '../../../types/usersPageTypes';

type PropsType = {
    state: SidebarType
    profile: ProfileType | null
    isOwner: boolean
    updateProfile: (profile: ProfileDataFormType) => Promise<any>
    users: UserType[]
}

export const Sidebar = (props: PropsType) => {
    const {state, profile, isOwner, updateProfile, users} = props

    return (
        <div className={styles.root}>
            <About about={state.about}
                   profile={profile}
                   isOwner={isOwner}
                   updateProfile={updateProfile}
            />
            <Friends users={users}/>
        </div>
    )
}