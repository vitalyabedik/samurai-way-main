import styles from './UsersFilteredButtons.module.css'

import {FilterType} from '../../../redux/reducers/usersReducer';
import {useState} from 'react';

type PropsType = {
    filter: FilterType
    onFilterChanged: (value?: boolean) => void
}

export const UsersFilteredButtons: React.FC<PropsType> = (props) => {
    const {onFilterChanged, filter} = props

    const onClickFilterChangedHandler = (value?: boolean) => onFilterChanged(value)

    return (
        <div className={styles.root}>
            <button onClick={() => onClickFilterChangedHandler(undefined)}
                    className={`${styles.button} ${filter === undefined ? styles.buttonSelected : ''}`}>
                All
            </button>
            <button onClick={() => onClickFilterChangedHandler(true)}
                    className={`${styles.button} ${filter ? styles.buttonSelected : ''}`}>Followed
            </button>
            <button onClick={() => onClickFilterChangedHandler(false)}
                    className={`${styles.button} ${!filter ? styles.buttonSelected : ''}`}
            >
                Unfollowed
            </button>
        </div>
    );
};

