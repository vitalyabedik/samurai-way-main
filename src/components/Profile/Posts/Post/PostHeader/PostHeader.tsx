import styles from './PostHeader.module.css';

import moreIcon from '../../../../../assets/images/posts/icon-more.svg'
import {ProfileType} from '../../../../../types';
import {Preloader} from '../../../../../components/common';
import {AvatarAndFullName} from '../../../../../components/common/AvatarAndFullName';

type PropsType = {
    profile: ProfileType | null
    showMore?: boolean
}

export const PostHeader = (props: PropsType) => {
    const {showMore = true, profile} = props

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.root}>
            <AvatarAndFullName image={profile.photos.large} fullName={profile.fullName}/>
            {showMore && <div className={styles.iconBlock}>
                <img className={styles.icon} src={moreIcon} alt="more-icon"/>
            </div>}
        </div>
    )
}