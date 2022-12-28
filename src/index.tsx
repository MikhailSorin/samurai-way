import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {state}  from'./redux/state'
import App, {AppPropsType} from "./App";
import {adPost} from "./redux/state";
import {renderEntireTree} from "./render";

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

renderEntireTree(state)