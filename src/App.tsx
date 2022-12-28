import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {memberType, messageType, PostType} from "./index";

export type AppPropsType = {
    profilePage: {
        posts: Array<PostType>
    },
    messagesPage: {
        dialogs: Array<memberType>
        messages: Array<messageType>
    },


}
export type state = {
    state: AppPropsType
    adPost: (newMessage: string) => void
}

function App(props: state) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.state.messagesPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.profilePage}
                               adPost={props.adPost}
                           />}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

