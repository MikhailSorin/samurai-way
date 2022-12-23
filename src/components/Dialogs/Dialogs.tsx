import React from "react";
import s from './Dialog.module.css'
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Message/Message";

type DialogsPropsType={
    dialogs:Array<DialogItemPropsType>
    messages:Array<MessagePropsType>
}


const Dialogs = (props:DialogsPropsType) => {


    let dialogsElements=props.dialogs.map(dialog=><DialogItem name={dialog.name} id={dialog.id = '1'}/>)
    let messagesElements=props.messages.map(message=><Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
               {dialogsElements}

            </div>

            <div className={s.messages}>
              {messagesElements}

            </div>

        </div>
    )
}
export default Dialogs