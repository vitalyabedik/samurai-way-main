import {connect} from 'react-redux';

import {addMessageAC, changeNewMessageTextAC} from '../../../redux/actions/dialogsAction';
import {Dialogs} from '../Dialogs';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/dialogsReducer';
import {withAuthRedirectComponent} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';
import React from 'react';
import {addPostAC, changeNewPostTextAC} from '../../../redux/actions/profileAction';
import {getUserProfileThunkCreator} from '../../../redux/thunks/profileThunk';
import {withRouter} from 'react-router-dom';
import {ProfileContainerAPI} from '../../Profile/ProfileContainer';

type MapStateToPropsType = {
    dialogsPage : InitialStateType
}

type MapDispatchToProps = {
    sendMessage: () => void
    onMessageChange: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state : AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        sendMessage: addMessageAC,
        onMessageChange: changeNewMessageTextAC
    }),
    withAuthRedirectComponent
)(Dialogs)