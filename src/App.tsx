import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {memberType, messageType, PostType} from "./index";
import {StoreType} from "./redux/state";


export type RootPropsType = {
    profilePage: {
        posts: Array<PostType>,
        newPostText: string
    },
    messagesPage: {
        dialogs: Array<memberType>
        messages: Array<messageType>
    },


}
export type state = {
    store: StoreType
}

function App(props: state) {
    const state1: RootPropsType = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={state1.messagesPage}/>}/>
                    <Route
                        path='/profile'
                        render={() => <Profile
                            profilePage={state1.profilePage}
                            //adPost={props.store.addPost.bind(props.store)}
                            //updateNewPostText={props.store.changeNewText.bind(props.store)}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

