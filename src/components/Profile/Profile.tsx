import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";
import MyPosts from "./myPosts/MyPosts";

type ProfilePropsType={
   posts:Array<PostType>
}
type state={
state: ProfilePropsType

}

const Profile = (props:state) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>

    )
}

export default Profile
