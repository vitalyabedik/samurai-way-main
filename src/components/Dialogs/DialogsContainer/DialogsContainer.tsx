import {StoreContext} from '../../../StoreContext';
import {addMessageAC, changeNewMessageTextAC} from '../../../redux/actions/dialogsAction';
import {Dialogs} from '../Dialogs';

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const sendMessage = () => {
                        store.dispatch(addMessageAC())
                    }

                    const onMessageChange = (text: string) => {
                        store.dispatch(changeNewMessageTextAC(text))
                    }

                    return (
                        <Dialogs state={state} sendMessage={sendMessage} onMessageChange={onMessageChange}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}