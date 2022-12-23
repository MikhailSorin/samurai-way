import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {state}from'./redux/state'
import App from "./App";

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




ReactDOM.render(
   /* <App posts={state.posts} dialogs={state.dialogs} messages={state.messages}/>,*/
    <App state={state}/>,
    document.getElementById('root')
);