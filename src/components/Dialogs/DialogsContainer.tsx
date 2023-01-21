import React from "react";
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store:StoreType
}

const DialogsContainer = (props: PropsType) => {
let state=props.store.getState()

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (text:string) => {
        props.store.dispatch(updateNewMessageBodyAC(text))
    }

    return (
        <div>
            <Dialogs state={state.dialogsPage} newMessageBody={state.dialogsPage.newMessageBody} sendMessage={onSendMessageClick} changeMessage={onNewMessageChange}/>
        </div>
    )
}
export default DialogsContainer