import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {memberType, messageType, PostType} from "./index";
import {ActionType, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type RootPropsType = {
    profilePage: {
        posts: Array<PostType>,
        newPostText: string
    },
    dialogsPage: {
        dialogs: Array<memberType>
        messages: Array<messageType>
        newMessageBody:string
    },
}
export type state = {
    store: any
}

function App(props: state) {
   console.log(props.store)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route
                        path='/profile'
                        render={() => <Profile store={props.store}/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

