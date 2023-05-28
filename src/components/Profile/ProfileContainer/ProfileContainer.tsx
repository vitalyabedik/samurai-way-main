import React from 'react';
import {connect} from 'react-redux';

import {addPostAC, changeNewPostTextAC} from '../../../redux/actions/profileAction';
import {Profile} from '../Profile';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/profileReducer';
import {InitialCurrentUserStateType} from '../../../redux/reducers/currentUserReducer';

type MapStateToPropsType = {
    profilePage : InitialStateType
    currentUser: InitialCurrentUserStateType
}

type MapDispatchToProps = {
    addPost: () => void
    onPostChange: (text: string) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state : AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        currentUser: state.currentUser
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    addPost: addPostAC,
    onPostChange: changeNewPostTextAC
})(Profile)