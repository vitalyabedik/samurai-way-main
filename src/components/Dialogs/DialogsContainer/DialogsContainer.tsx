import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {addMessageAC} from '../../../redux/actions/dialogsAction';
import {Dialogs} from '../Dialogs';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/dialogsReducer';
import {withAuthRedirectComponent} from '../../../hoc/withAuthRedirect';
import {withRouter} from 'react-router-dom';

type MapStateToPropsType = {
    dialogsPage : InitialStateType
}

type MapDispatchToProps = {
    sendMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state : AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        sendMessage: addMessageAC,
    }),
    withRouter,
    withAuthRedirectComponent
)(Dialogs)

