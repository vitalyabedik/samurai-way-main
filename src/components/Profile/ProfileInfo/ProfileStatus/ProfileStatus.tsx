import React from 'react';

import styles from './ProfileStatus.module.css';

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                        </div>
                        : <div>
                            <input
                                autoFocus={true}
                                onBlur={this.deActivateEditMode.bind(this)}
                                value={this.props.status}
                            />
                        </div>
                }
            </div>
        )
    }
}