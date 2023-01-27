import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

let mapDataToProps = (state:AppStateType) => {
    return {
        state:state.dialogsPage,
        newMessageBody:state.dialogsPage.newMessageBody,
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        changeMessage:(text:string) =>{
            dispatch(updateNewMessageBodyAC(text))
        } ,
        sendMessage:()=>{
            dispatch(sendMessageAC())
        }

    }
}

 const DialogsContainer = connect(mapDataToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer

