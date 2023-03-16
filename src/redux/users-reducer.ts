import {ActionType} from "./store";
import {PostType} from "../index";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type UserType = {
    "name": string
    "id": string
    "uniqueUrlName": string
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
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export type initialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}

export type UserStateType = typeof initialState

export const usersReducer = (state: initialStateType = initialState, action: userActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(el => action.userId === el.id ? {...el, followed: true} : el)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => action.userId === el.id ? {...el, followed: false} : el)}

        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
           return {...state, currentPage:action.currentPage}

        }
        case SET_TOTAL_USERS_COUNT:{
           return {...state, totalUsersCount:action.totalUsersCount}

        }
        default:
            return state
    }

}

type userActionsType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>|ReturnType<typeof setCurrentPageAC>|ReturnType<typeof setUsersTotalCountAC>

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

export const setCurrentPageAC = (currentPage:number) => {
    // console.log('setCurrentPageAC')
    return ({
        type: SET_CURRENT_PAGE,
        currentPage
    }) as const
}
export const setUsersTotalCountAC = (totalUsersCount:number) => {
    // console.log('setCurrentPageAC')
    return ({
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }) as const
}