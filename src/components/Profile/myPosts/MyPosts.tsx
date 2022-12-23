import React from 'react';
import Post from "./Post/Post";
import s from './myPosts.module.css'
import {PostType} from "../../../index";


type myPostsType={
    posts: Array<PostType>
}
const MyPosts = (props:myPostsType) => {
    let postsElemens=props.posts.map(d => <Post message={d.message} likeCount={d.likeCount}/>)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElemens}
        </div>
    </div>
}

export default MyPosts
