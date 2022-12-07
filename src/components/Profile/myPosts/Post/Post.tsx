import React from 'react';
import ppp from './Post.module.css'

interface Props {
    message: string;
    likeCount: number;
}
const post = ({message, likeCount}:Props) => {
    return <div className={ppp.item}>
        <img src='https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'/>
        {message}
        {likeCount}
        <div>
            <span>like</span>
        </div>
    </div>
}

export default post
