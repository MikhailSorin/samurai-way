import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {memberType, messageType, PostType} from "./index";
import {ActionType, StoreType} from "./redux/store";


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
    store: any//StoreType!!!!!!!!!!!!!!!!!!!!!!!
    dispatch:(action: ActionType)=>void
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
                               newMessageBody={state1.dialogsPage.newMessageBody}
                               state={state1.dialogsPage}
                               dispatch={props.dispatch.bind(props.store)}
                           />}/>
                    <Route
                        path='/profile'
                        render={() => <Profile
                            profilePage={state1.profilePage}
                            dispatch={props.dispatch.bind(props.store)}
                        />}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

