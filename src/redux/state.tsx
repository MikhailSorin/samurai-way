import {RootPropsType} from "../App";

let renderEntireTree = (s: RootPropsType) => {
}
export const subscribe = (observer: () => void) => {
    renderEntireTree = observer
}

export type StoreType = {
    _state: RootPropsType
    changeNewText: (newText: string) => void
    addPost: () => void
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: ()=>RootPropsType}

export const store: StoreType = {
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
        messagesPage: {
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
            ]
        }
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    addPost() {
        let newPost = {
            id: '5', message: this._state.profilePage.newPostText, likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText =''
        this._onChange()
    },
    _onChange() {
        console.log("state changed")
    },
    subscribe(callBack) {
        this._onChange = callBack
    },
    getState() {
        return this._state
    }

}