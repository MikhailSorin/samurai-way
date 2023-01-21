import React, {ChangeEvent} from "react";
import s from './Dialog.module.css'
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Message/Message";

type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

type PropsType = {
    state: DialogsPropsType
    newMessageBody:string
    changeMessage: (text:string) => void
    sendMessage:()=>void
}

const Dialogs = (props: PropsType) => {
console.log('rerender Dialogs')

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name}
                                                                                     id={dialog.id = '1'}/>)
    let messagesElements = props.state.messages.map(message => <Message message={message.message}
                                                                                     id={message.id}/>)

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.changeMessage(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs