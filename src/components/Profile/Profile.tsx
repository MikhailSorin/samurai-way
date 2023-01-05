import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";
import MyPosts from "./myPosts/MyPosts";


type ProfilePropsType = {
    posts: Array<PostType>
    newPostText:string
}
type state = {
    profilePage: ProfilePropsType
    adPost: () => void
    updateNewPostText:(newText:string)=>void
}

const Profile = (props: state) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                adPost={props.adPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>

    )
}

export default Profile
