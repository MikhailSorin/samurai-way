import React from 'react';
import './index.css';
import {store} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";



let renderEntireTree=()=>{
    ReactDOM.render(
       /* <App state={state} adPost={adPost} updateNewPostText={updateNewPostText}/>,*/
        <App store={store}/>,
        document.getElementById('root')
    );
}
renderEntireTree()
store.subscribe(renderEntireTree)


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
