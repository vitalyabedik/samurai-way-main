import React, {ChangeEvent} from 'react';

import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onUpdateStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div>
                            <span className={styles.status}
                                  onDoubleClick={this.activateEditMode}>{this.props.status || 'No Status'}</span>
                        </div>
                        : <div>
                            <input
                                onChange={this.onUpdateStatusChangeHandler}
                                autoFocus={true}
                                onBlur={this.deActivateEditMode}
                                value={this.state.status}
                            />
                        </div>
                }
            </div>
        )
    }
}