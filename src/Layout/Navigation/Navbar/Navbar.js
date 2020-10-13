import React from "react";
import "../Nav.css";
import Burger from '../Burger/Burger';

const Navbar = ({ open, close, display }) => {
    return (
        <nav className="nav-bar" >
            <div onClick={open}>
                <Burger />
            </div>
            <div className="nav-logo">LOGO</div>
            <div className="nav-space" />
            <div onClick={close} className="nav-items">
                <ul onClick={close}>
                    <li>Dashboard</li>
                    <li>Services</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
