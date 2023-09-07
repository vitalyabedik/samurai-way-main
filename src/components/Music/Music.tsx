import styles from './Music.module.css'

import {UnderConstructionPage} from '../../components/common/UnderConstructionPage/UnderConstructionPage';

type PropsType = {

}

export const Music = (props: PropsType) => {
    return (
        <div className={styles.root}><UnderConstructionPage/></div>
    )
}