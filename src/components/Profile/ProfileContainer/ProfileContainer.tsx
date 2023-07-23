import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {addPostAC} from '../../../redux/actions/profileAction';
import {Profile} from '../Profile';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/profileReducer';
import {InitialCurrentUserStateType} from '../../../redux/reducers/currentUserReducer';
import {ProfileType} from '../../../types';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from '../../../redux/thunks/profileThunk';
import {withAuthRedirectComponent} from '../../../hoc/withAuthRedirect';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profilePage: InitialStateType
    currentUser: InitialCurrentUserStateType
    profile: ProfileType | null
    status: string
    authorizedUserId: string | null
    isAuth: boolean
}

type MapDispatchToProps = {
    addPost: (newPostText: string) => void
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToProps
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId as string

            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        currentUser: state.currentUser,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addPost: addPostAC,
        getUserProfile: getUserProfileThunkCreator,
        getUserStatus: getUserStatusThunkCreator,
        updateUserStatus: updateUserStatusThunkCreator
    }),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainerAPI)