import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

/*type myPostsPropsType = {
    store: StoreType
}*/

const MyPostsContainer = () => {

        return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                const addPost = () => {store.dispatch(addPostAC())}
                const onPostChange = (text: string) => {store.dispatch(changeNewTextAC(text))}
                return (<MyPosts
                    posts={state.profilePage.posts}
                    adPost={addPost}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={onPostChange}/>)
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer
