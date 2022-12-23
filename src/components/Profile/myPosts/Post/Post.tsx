import React from 'react';
import ppp from './Post.module.css'

type PostPropsType= {
    message: string;
    likeCount: number;
}
const post = (props:PostPropsType) => {
    return <div className={ppp.item}>
        <img src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'/>
        {props.message}
        {props.likeCount}
        <div>
            <span>like</span>
        </div>
    </div>
}

export default post
