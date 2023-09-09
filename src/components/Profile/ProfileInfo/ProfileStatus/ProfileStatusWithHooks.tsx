import React, {ChangeEvent, useState} from 'react';

import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    const {status, updateUserStatus} = props

    const [editMode, setEditMode] = useState(false)
    const [localStatus, setLocalStatus] = useState(status)

    const onUpdateStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(localStatus)
    }

    return (
        <div className={styles.root}>
            {
                !editMode
                    ? <p className={styles.status} onDoubleClick={activateEditMode}>{status || 'No Status'}</p>
                    : <div>
                        <input
                            className={styles.input}
                            onChange={onUpdateStatusChangeHandler}
                            value={localStatus}
                            onBlur={deActivateEditMode}
                            autoFocus={true}
                        />
                    </div>
            }
        </div>
    )
}