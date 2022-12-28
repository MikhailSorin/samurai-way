import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {state}  from'./redux/state'
import App, {AppPropsType} from "./App";
import {adPost} from "./redux/state";
export let renderEntireTree=(state:AppPropsType)=>{
ReactDOM.render(
   /* <App posts={state.posts} dialogs={state.dialogs} messages={state.messages}/>,*/
    <App state={state} adPost={adPost}/>,
    document.getElementById('root')
);

}
