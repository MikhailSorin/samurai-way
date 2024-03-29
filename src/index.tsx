import React from 'react';
import './index.css';
import {store} from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";




/*let renderEntireTree=(state:any)=>{*/

    ReactDOM.render(
        <BrowserRouter>
          <Provider store={store}>
        <App/>
          </Provider>,
        </BrowserRouter>,

            document.getElementById('root')
    );
/*}*/



export type PostType = {
    id: string,
    message: string,
    likeCount: number
}


