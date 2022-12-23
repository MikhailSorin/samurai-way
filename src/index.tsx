import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostType = {
    id: string,
    message: string,
    likeCount: number
}
export type memberType = {
    id: string,
    name: string
}
export type messageType = {
    id: string,
    message: string
}

let posts = [
    {id: '1', message: 'first message', likeCount: 5},
    {id: '2', message: 'second message', likeCount: 10},
    {id: '3', message: 'therd message', likeCount: 10},
    {id: '4', message: 'yo message', likeCount: 10},
    {id: '5', message: 'hru message', likeCount: 10},
]
let dialogs = [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Fima'},
    {id: '3', name: 'Tima'},
    {id: '4', name: 'Kima'}
]
let messages = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'By!'},
    {id: '3', message: 'Why?'},
    {id: '4', message: 'Hwo?'}
]



ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);