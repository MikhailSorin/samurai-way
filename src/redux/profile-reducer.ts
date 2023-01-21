import {ActionType} from "./store";
import {PostType} from "../index";

export const ADD_POST = 'ADD_POST'
export const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"

type StateType = {
    posts: Array<PostType>,
    newPostText: string
}

let initialState = {

        posts: [
            {id: '1', message: 'first message', likeCount: 5},
            {id: '2', message: 'second message', likeCount: 10},
            {id: '3', message: 'therd message', likeCount: 10},
            {id: '4', message: 'yo message', likeCount: 10},
            {id: '5', message: 'hru message', likeCount: 10},
        ],
        newPostText: 'IT-Kamasutra'

    }

    export const profileReducer = (state=initialState, action: ActionType) => {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: '5',
                    message: state.newPostText,
                    likeCount: 0
                }
                state.posts.push(newPost)
                state.newPostText = ''
                return state
            }
            case CHANGE_NEW_TEXT: {
                state.newPostText = action.newText
                return state
            }
            default:
                return state
        }

    }
    export const addPostAC = () => {
        return ({
            type: ADD_POST
        }) as const
    }
    export const changeNewTextAC = (newText: string) => {
        return ({
            type: CHANGE_NEW_TEXT,
            newText: newText
        }) as const
    }