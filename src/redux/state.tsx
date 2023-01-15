import {RootPropsType} from "../App";

let renderEntireTree = (s: RootPropsType) => {
}
export const subscribe = (observer: () => void) => {
    renderEntireTree = observer
}

export type StoreType = {
    _state: RootPropsType
    //_changeNewText: (newText: string) => void
   // _addPost: () => void
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootPropsType
    dispatch: (action: ActionType) => void

}

type AddPostActionType = {
    type: "ADD-POST"
    //postText: string
}
type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}

export type ActionType=AddPostActionType|ChangeNewTextActionType

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


    /*_changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },*/
   /* _addPost() {
        let newPost = {
            id: '5',
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        //  this._state.profilePage.newPostText = ''
        this._onChange()
    },*/
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: '5',
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
          //  this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type==="CHANGE-NEW-TEXT")
            {
                console.log("CHANGE-NEW-TEXT")
                //debugger
                this._state.profilePage.newPostText = action.newText

                this._onChange()
            }


    }


}