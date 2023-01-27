import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostType} from "../../../index";

type MapStatePropsType={
    posts: Array<PostType>,
    newPostText:string
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost:()=>{dispatch(addPostAC())},
        updateNewPostText: (newText: string) => {
            dispatch(changeNewTextAC(newText))
        }
    }
}


 const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer