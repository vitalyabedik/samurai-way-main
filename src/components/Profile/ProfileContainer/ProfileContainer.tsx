import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {addPostAC} from '../../../redux/actions/profileAction';
import {Profile} from '../Profile';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/profileReducer';
import {ProfileType} from '../../../types';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, savePhotoThunkCreator, updateProfileTC,
    updateUserStatusThunkCreator
} from '../../../redux/thunks/profileThunk';
import {withAuthRedirectComponent} from '../../../hoc/withAuthRedirect';
import {ProfileDataFormType} from '../ProfileDataForm';
import {getUsersTC} from '../../../redux/thunks/usersThunk';
import {getUsers} from '../../../redux/selectors/usersSelector';
import {UserType} from '../../../types/usersPageTypes';
import {FilterType} from '../../../redux/reducers/usersReducer';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
    users: UserType[]
}

type MapDispatchToProps = {
    addPost: (newPostText: string) => void
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    updateProfile: (profile: ProfileDataFormType) => Promise<any>
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToProps
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileContainerAPI extends React.Component<ProfilePropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedUserId)

            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
        this.props.getUsers(1,  10, {term: '', friend: true} )
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}
                     updateProfile={this.props.updateProfile}
                     users={this.props.users}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        users: getUsers(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addPost: addPostAC,
        getUserProfile: getUserProfileThunkCreator,
        getUserStatus: getUserStatusThunkCreator,
        updateUserStatus: updateUserStatusThunkCreator,
        savePhoto: savePhotoThunkCreator,
        updateProfile: updateProfileTC,
        getUsers: getUsersTC,
    }),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainerAPI)