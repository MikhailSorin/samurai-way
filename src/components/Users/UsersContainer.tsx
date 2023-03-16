import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setUsersAC, setUsersTotalCountAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import UsersC from "./UsersС";

type MapStateToPropsType={
    usersPage:initialStateType,
    pageSize:number,
    totalUsersCount: number
    currentPage:number
}
type MapDispatchToProps={
    follow:(userId: string)=>void
    unfollow:(userId: string)=>void
    setUsers: (users:Array<UserType>)=>void
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}

export type UsersPropsType=MapStateToPropsType&MapDispatchToProps

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
    },
        setCurrentPage:(pageNumber:number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)