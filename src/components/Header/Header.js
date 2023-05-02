import React from 'react';
import {Link} from "react-router-dom";
import logo from "../img/logo.jpg";
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <header className="header">
                <Link to="/">
                    <img className='header-logo' src={logo} alt=""/>
                </Link>
                <h1 className="h1">Ala-Too Shop</h1>
                <nav className='nav'>
                    <Link className='nav-link' to='/cart'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                    <Link className='nav-link' to='/profile'>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </nav>
                <form action="" className="form_lang">
                    <select id="lang" name="lang" className="select_lang">
                        <option value="en" className="option">English</option>
                        <option value="ru" className="option">Русский</option>
                    </select>
                </form>
            </header>
        </div>
    );
};

export default Header;