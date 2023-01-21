import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";
import MyPosts from "./myPosts/MyPosts";
import {ActionType} from "../../redux/store";


type ProfilePropsType = {
    posts: Array<PostType>
    newPostText:string
}
type state = {
    profilePage: ProfilePropsType
    //adPost: () => void
    //updateNewPostText:(newText:string)=>void
    dispatch: (action: ActionType) => void
}

const Profile = (props: state) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                //adPost={props.adPost}
                newPostText={props.profilePage.newPostText}
                //updateNewPostText={props.updateNewPostText}
                dispatch={props.dispatch}
            />
        </div>

    )
}

export default Profile
