import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.png';


const Header = () => {
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo" />
            <div>
                <a href="/order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>

            </div>
        </nav>
    );
};

export default Header;