import React from 'react';
import Post from "./Post/Post";
import s from './myPosts.module.css'
import {PostType} from "../../../index";


type myPostsType = {
    posts: Array<PostType>
    adPost: (newMessage: string) => void
}
const MyPosts = (props: myPostsType) => {
    let postsElemens = props.posts.map(d => <Post message={d.message} likeCount={d.likeCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        let post = newPostElement.current ? newPostElement.current.value : ''
        props.adPost(post)
        if(newPostElement.current)newPostElement.current.value = ''

    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <textarea ref={newPostElement}></textarea>
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
