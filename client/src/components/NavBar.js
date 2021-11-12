import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import "../styles/Navbar.css"
import logo from '../images/Large inwood bagels logo.jpeg'

function NavBar() {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <nav className="navbar is-black is-fixed-top" role="navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={logo}/>
                    {/*width="112" height="28"*/}
                </a>

                <a role="button"
                   className={`navbar-burger ${isActive ? "is-active" : ""}`}
                   onClick={handleToggle}
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="navbar-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navbar-menu">
                <div className="navbar-end">
                    <NavLink to="/" exact activeClassName="bordered-active" className="navbar-item">Home </NavLink>
                    <NavLink to="/menu" exact activeClassName="bordered-active" className="navbar-item">Menu </NavLink>
                    <NavLink to="/location" exact activeClassName="bordered-active"
                             className="navbar-item">Location </NavLink>
                    <NavLink to="/order" exact activeClassName="bordered-active" className="navbar-item">Order
                        Online </NavLink>
                    <NavLink to="/signin" exact activeClassName="bordered-active" className="navbar-item">Sign
                        In </NavLink>
                    <NavLink to="/signup" exact activeClassName="bordered-active" className="navbar-item">Sign
                        Up </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
