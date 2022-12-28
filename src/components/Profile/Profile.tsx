import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";
import MyPosts from "./myPosts/MyPosts";

type ProfilePropsType={
   posts:Array<PostType>
}
type state={
state: ProfilePropsType
    adPost:(newMessage:string)=>void
}

const Profile = (props:state) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} adPost={props.adPost}/>
        </div>

    )
}

export default Profile
