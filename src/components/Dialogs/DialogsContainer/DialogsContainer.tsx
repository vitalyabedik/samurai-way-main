import {connect} from 'react-redux';

import {addMessageAC, changeNewMessageTextAC} from '../../../redux/actions/dialogsAction';
import {Dialogs} from '../Dialogs';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/dialogsReducer';

type MapStateToPropsType = {
    dialogsPage : InitialStateType
    isAuth: boolean
}

type MapDispatchToProps = {
    sendMessage: () => void
    onMessageChange: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state : AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    sendMessage: addMessageAC,
    onMessageChange: changeNewMessageTextAC
})(Dialogs)