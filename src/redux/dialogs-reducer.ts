import {ActionType} from "./store";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE = "SEND_MESSAGE"

type DialogType = {
    id: string,
    name: string
}
export type MessageType = {
    id: string,
    message: string
}
const initialState = {
    dialogs: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Fima'},
        {id: '3', name: 'Tima'},
        {id: '4', name: 'Kima'}
    ] as Array<DialogType>,
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'By!'},
        {id: '3', message: 'Why?'},
        {id: '4', message: 'Hwo?'}
    ] as Array<MessageType>,
    newMessageBody: ""
}
type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {...state, newMessageBody: action.body}
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: '6', message: state.newMessageBody}]
            }

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