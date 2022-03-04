import React from 'react'
import '../styles/styles.css'
import {NavLink} from 'react-router-dom'
import '../firebase'
import {logout} from "../firebase";

function NavBarLogged() {

    let totalQuantity = 0
    return (
        <div className="navbar-end">
            <NavLink to="/" exact activeClassName="bordered-active" className="navbar-item">Home </NavLink>
            <NavLink to="/menu" exact activeClassName="bordered-active" className="navbar-item">Menu </NavLink>
            <NavLink to="/location" exact activeClassName="bordered-active"
                     className="navbar-item">Location </NavLink>
            <NavLink to="/settings" exact activeClassName="bordered-active" className="navbar-item">Profile </NavLink>
            <NavLink to="/cart" exact activeClassName="bordered-active" className="navbar-item">
                <div className="nav-bag">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-cart-dash" viewBox="0 0 16 16">
                        <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                        <path
                            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <span className="bag-quantity">
            <span>{totalQuantity}</span>
          </span>
                </div>
            </NavLink>
            <button className="navbar-button" onClick={logout}>Log out</button>
        </div>
    )
}

export default NavBarLogged
