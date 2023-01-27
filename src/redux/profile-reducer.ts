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
    ] as Array<PostType>,
    newPostText: 'IT-Kamasutra'

}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state, newPostText: '', posts: [...state.posts, {
                    id: '5',
                    message: state.newPostText,
                    likeCount: 0
                }]
            }
        }
        case CHANGE_NEW_TEXT: {
            return {...state, newPostText: action.newText}
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