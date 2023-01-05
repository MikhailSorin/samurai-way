import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from './myPosts.module.css'
import {PostType} from "../../../index";


type myPostsType = {
    posts: Array<PostType>
    adPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
const MyPosts = (props: myPostsType) => {
    let postsElemens = props.posts.map(d => <Post message={d.message} likeCount={d.likeCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.adPost()


    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <textarea
                onChange={onPostChange}
                value={props.newPostText}
                /*ref={newPostElement}*//>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElemens}
        </div>
    </div>
}

export default MyPosts
