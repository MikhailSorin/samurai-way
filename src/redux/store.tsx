import {addPostAC, changeNewTextAC} from "./profile-reducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {AppStateType} from "./redux-store";

let renderEntireTree = (s: AppStateType) => {
}

export type StoreType = {
    _state: AppStateType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => AppStateType
    dispatch: (action: ActionType) => void

}

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

