import React from 'react';
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to="/profile" activeClassName={n.activeLink}>Profile</NavLink>
            </div >
            <div className={n.item}>
                <NavLink to="/dialogs" activeClassName={n.activeLink}>Message</NavLink>
            </div>
            <div className={n.item}>
                <a>News</a>
            </div>
            <div className={n.item}>
                <a>Music</a>
            </div>
            <div className={n.item}>
                <a>Setings</a>
            </div>
        </nav>
    )
}

export default Navbar
