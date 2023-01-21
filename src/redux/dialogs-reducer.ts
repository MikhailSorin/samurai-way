import {ActionType} from "./store";
import {memberType, messageType} from "../index";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE = "SEND_MESSAGE"

type StateType = {
    dialogs: Array<memberType>
    messages: Array<messageType>
    newMessageBody: string
}
const initialState={
    dialogs: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Fima'},
        {id: '3', name: 'Tima'},
        {id: '4', name: 'Kima'}
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'By!'},
        {id: '3', message: 'Why?'},
        {id: '4', message: 'Hwo?'}
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state=initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body
            return state
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: '6', message: body})
            return state
        }
        default:
            return state
    }

}

export const updateNewMessageBodyAC = (body: string) => {
    return ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }) as const
}
export const sendMessageAC = () => {
    return ({
        type: SEND_MESSAGE,
    }) as const
}