import React from "react";
import logo from '.././logo.svg';
import './StyleHeader.scss';
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            <div className="menu">
                <ul>
                    <li><img src={logo} className="App-logo" alt="logo" /></li>
                    <li className="react">React</li>
                    <li><NavLink to="/" className="reacts">Home</NavLink></li>
                    <li><NavLink to="/todolist" className="reacts">Todo List</NavLink></li>
                    <li><NavLink to="/caculator" className="reacts">Caculator</NavLink></li>
                    <li><NavLink to="/login" className="login">Login</NavLink></li>
                </ul>
            </div>
        </div>
    )

}
export default Navbar;