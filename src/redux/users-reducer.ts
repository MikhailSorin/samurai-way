import {ActionType} from "./store";
import {PostType} from "../index";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = 'SET_USERS'

export type UserType = {
    "name": string
    "id": string
    "uniqueUrlName":string
    "photos": {
        "small": string
        "large": string
    },
    "status": string
    "followed": boolean
}

/*export type UserType = {
    id: string,
    photoUrl: string,
    fullName: string,
    followed: boolean
    status: string,
    location: {
        city: string,
        country: string
    }
}*/

let initialState: initialStateType = {
    users: []
}

export type initialStateType = { users: Array<UserType> }

export type UserStateType = typeof initialState

export const usersReducer = (state: initialStateType = initialState, action: userActionsType):initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(el => action.userId === el.id ? {...el, followed: true} : el)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => action.userId === el.id ? {...el, followed: false} : el)}

        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }

}

type userActionsType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userId: string) => {
   // console.log('followAC')
    return ({
        type: FOLLOW,
        userId
    }) as const
}
export const unFollowAC = (userId: string) => {
    //console.log('unFollow')
    return ({
        type: UNFOLLOW,
        userId
    }) as const
}
export const setUsersAC = (users: Array<UserType>) => {
   // console.log('setUsersAC')
    return ({
        type: SET_USERS,
        users
    }) as const
}