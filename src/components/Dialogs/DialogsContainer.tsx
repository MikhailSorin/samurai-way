import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";



const DialogsContainer = () => {
    return (
        <StoreContext.Consumer >{
            (store) => {
                let state = store.getState()
                const onSendMessageClick = () => {store.dispatch(sendMessageAC())}
                const onNewMessageChange = (text: string) => {store.dispatch(updateNewMessageBodyAC(text))}
                return (<Dialogs
                    state={state.dialogsPage}
                    newMessageBody={state.dialogsPage.newMessageBody}
                    sendMessage={onSendMessageClick}
                    changeMessage={onNewMessageChange}/>)
            }}
        </StoreContext.Consumer>
    )
}
export default DialogsContainer