import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {addMessageAC, changeNewMessageTextAC} from '../../../redux/actions/dialogsAction';
import {Dialogs} from '../Dialogs';
import {AppStateType} from '../../../redux/redux-store';
import {InitialStateType} from '../../../redux/reducers/dialogsReducer';

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
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage : () => {
            dispatch(addMessageAC())
        },
        onMessageChange : (text: string) => {
            dispatch(changeNewMessageTextAC(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)