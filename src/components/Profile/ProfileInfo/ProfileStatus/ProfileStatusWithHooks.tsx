import React, {ChangeEvent, useState} from 'react';

import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
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
        <div>
            {
                !editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode}>{status || 'No Status'}</span>
                    </div>
                    : <div>
                        <input
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