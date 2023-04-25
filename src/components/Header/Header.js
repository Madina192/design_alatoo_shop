import React from 'react';
import {Link} from "react-router-dom";
import logo from "../img/logo.jpg";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header className="header">
                <img className='header-logo' src={logo} alt=""/>
                <nav className='nav'>
                    <Link className='nav-link' exact='true' to='/home'>Home</Link>
                    <Link className='nav-link' to='/cart'>Cart</Link>
                    <Link className='nav-link' to='/product'>Cart</Link>
                    <Link className='nav-link' to='/payment'>Cart</Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;