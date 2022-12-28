import {useState} from "react";
import {AppPropsType} from "../App";
import {renderEntireTree} from "../render";



export let state:AppPropsType={
    profilePage:{
        posts : [
            {id: '1', message: 'first message', likeCount: 5},
            {id: '2', message: 'second message', likeCount: 10},
            {id: '3', message: 'therd message', likeCount: 10},
            {id: '4', message: 'yo message', likeCount: 10},
            {id: '5', message: 'hru message', likeCount: 10},
        ]
    },
    messagesPage:{
        dialogs : [
            {id: '1', name: 'Dima'},
            {id: '2', name: 'Fima'},
            {id: '3', name: 'Tima'},
            {id: '4', name: 'Kima'}
        ],
        messages : [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'By!'},
            {id: '3', message: 'Why?'},
            {id: '4', message: 'Hwo?'}
        ]
    }
}
/*const [posts,setPosts]=useState()*/

export const adPost=(postMessage:string)=>{
    let newPost={
        id: '5', message: postMessage, likeCount: 0
    }

    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}