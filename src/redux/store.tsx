import {RootPropsType} from "../App";
import {ADD_POST, addPostAC, CHANGE_NEW_TEXT, changeNewTextAC, profileReducer} from "./profile-reducer";
import {
    dialogsReducer,
    SEND_MESSAGE,
    sendMessageAC,
    UPDATE_NEW_MESSAGE_BODY,
    updateNewMessageBodyAC
} from "./dialogs-reducer";

let renderEntireTree = (s: RootPropsType) => {
}
export const subscribe = (observer: () => void) => {
    renderEntireTree = observer
}

export type StoreType = {
    _state: RootPropsType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootPropsType
    dispatch: (action: ActionType) => void

}

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

/*export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'first message', likeCount: 5},
                {id: '2', message: 'second message', likeCount: 10},
                {id: '3', message: 'therd message', likeCount: 10},
                {id: '4', message: 'yo message', likeCount: 10},
                {id: '5', message: 'hru message', likeCount: 10},
            ],
            newPostText: 'IT-Kamasutra'
        },
        dialogsPage: {
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
    },


    _onChange() {
        console.log("state changed")

    },
    subscribe(callBack) {
        this._onChange = callBack
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action)
        this._onChange()
    }
}*/
