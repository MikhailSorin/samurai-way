import React from 'react';
import Post from "./Post/Post";

const myPosts = () => {
    return <div>
        <textarea></textarea>
        <button>Add post</button>
        <div>
            new post
        </div>

        <div>
            <Post message={'first message'} likeCount={5}/>

            <Post message={'second message'} likeCount={10}/>


        </div>
    </div>
}

export default myPosts
