import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";
import MyPosts from "./myPosts/MyPosts";

type ProfilePropsType={
   posts:Array<PostType>
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>

    )
}

export default Profile
