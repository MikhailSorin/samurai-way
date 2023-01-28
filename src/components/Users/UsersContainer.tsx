import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, initialStateType, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType={
    usersPage:initialStateType
}
type MapDispatchToProps={
    follow:(userId: string)=>void
    unfollow:(userId: string)=>void
    setUsers: (users:Array<UserType>)=>void
}

export type UsersPropsType=MapStateToPropsType&MapDispatchToProps

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:Array<UserType>)=>{
            dispatch(setUsersAC(users))
    }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)