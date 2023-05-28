import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';

import {addPostAC, changeNewPostTextAC, setUserProfileAC} from '../../../redux/actions/profileAction';
import {Profile} from '../Profile';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/profileReducer';
import {InitialCurrentUserStateType} from '../../../redux/reducers/currentUserReducer';
import {ProfileType} from '../../../types';

type MapStateToPropsType = {
    profilePage : InitialStateType
    currentUser: InitialCurrentUserStateType
    profile: ProfileType | null
}

type MapDispatchToProps = {
    addPost: () => void
    onPostChange: (text: string) => void
    setUserProfile: (profile: any) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToProps

export class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    componentDidMount() {
        const baseURL = 'https://social-network.samuraijs.com/api/1.0'

        axios.get(`${baseURL}/profile/2`).then(res => {
            const data = res.data
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state : AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        currentUser: state.currentUser,
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    addPost: addPostAC,
    onPostChange: changeNewPostTextAC,
    setUserProfile: setUserProfileAC
})(ProfileContainerAPI)