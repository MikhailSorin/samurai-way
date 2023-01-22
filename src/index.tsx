import React from 'react';
import './index.css';
import {store} from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from './StoreContext'



let renderEntireTree=(state:any)=>{

    ReactDOM.render(
        <BrowserRouter>
          <Provider store={store}>
        <App/>
          </Provider>,
        </BrowserRouter>,

            document.getElementById('root')
    );
}
renderEntireTree(store.getState())

store.subscribe(()=>{
    let state=store.getState()

    renderEntireTree(state)})


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
