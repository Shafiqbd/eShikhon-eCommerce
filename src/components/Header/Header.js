import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" />
      <div>
        <Link to="/order">Order</Link>
        <Link to="/order-review">Order Review</Link>
        <Link to="/manage-inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
