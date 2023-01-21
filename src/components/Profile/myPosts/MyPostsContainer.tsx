import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type myPostsPropsType = {
    store: StoreType
}

const MyPostsContainer = (props: myPostsPropsType) => {
    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(changeNewTextAC(text))
    }

    return <MyPosts posts={state.profilePage.posts} adPost={addPost}
                    newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange}/>
}
export default MyPostsContainer
