import React from 'react';
import {connect} from 'react-redux';

import {AppStateType} from '../../../redux/redux-store';
import {Header} from '../Header';
import {logoutTC} from '../../../redux/thunks/authThunk';
import {ProfileType} from '../../../types';
import {FilterType} from '../../../redux/reducers/usersReducer';
import {getUsersTC} from '../../../redux/thunks/usersThunk';
import {getCurrentPage, getPageSize, getUsersFilter} from '../../../redux/selectors/usersSelector';

export class HeaderContainerAPI extends React.Component<HeaderPropsType> {
    onFilterChanged = (filterSearch: string) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(1, pageSize, {friend: filter.friend, term: filterSearch})
    }

    render() {
        return (
            <Header {...this.props} onFilterChanged={this.onFilterChanged} />
        )
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    profile: ProfileType | null
    pageSize: number
    currentPage: number
    filter: FilterType
}

type MapDispatchToProps = {
    logOut: () => void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile,
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        filter: getUsersFilter(state)
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    logOut: logoutTC,
    getUsers: getUsersTC,
})(HeaderContainerAPI)