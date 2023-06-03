import React from 'react';
import {connect} from 'react-redux';

import {addPostAC, changeNewPostTextAC, setUserProfileAC} from '../../../redux/actions/profileAction';
import {Profile} from '../Profile';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/profileReducer';
import {InitialCurrentUserStateType} from '../../../redux/reducers/currentUserReducer';
import {ProfileType} from '../../../types';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileAPI} from '../../../api/profileApi';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profilePage: InitialStateType
    currentUser: InitialCurrentUserStateType
    profile: ProfileType | null
}

type MapDispatchToProps = {
    addPost: () => void
    onPostChange: (text: string) => void
    setUserProfile: (profile: any) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToProps
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }

        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        currentUser: state.currentUser,
        profile: state.profilePage.profile
    }
}

let withURLDataContainerComponent = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(mapStateToProps, {
    addPost: addPostAC,
    onPostChange: changeNewPostTextAC,
    setUserProfile: setUserProfileAC
})(withURLDataContainerComponent)