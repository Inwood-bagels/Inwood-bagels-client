import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Switch, Route} from "react-router-dom";
import Menu from './Menu'
import Location from './Location'
import Order from './Order'
import Signin from './Signin'
import Signup from './Signup'
import Home from "./Home";
import Footer from "./Footer";



function NavBar() {
    return (
        <div>
            <nav>>
                    <NavLink to="/" exact activeStyle={{color: 'red'}}>Home </NavLink>
                    <NavLink to="/menu" exact activeStyle={{color: 'red'}}>Menu </NavLink>
                    <NavLink to="/location" exact activeStyle={{color: 'red'}}>Location </NavLink>
                    <NavLink to="/order" exact activeStyle={{color: 'red'}}>Order Online </NavLink>
                    <NavLink to="/signin" exact activeStyle={{color: 'red'}}>Sign In </NavLink>
                    <NavLink to="/signup" exact activeStyle={{color: 'red'}}>Sign Up </NavLink>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/location" component={Location} />
                <Route  path="/order" component={Order} />
                <Route  path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
            <Footer/>
        </div>
    )
}

export default NavBar
