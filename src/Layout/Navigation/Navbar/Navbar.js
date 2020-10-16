import React from "react";
import "../Nav.css";
import 'antd/dist/antd.css';
import Burger from '../Burger/Burger';
import NavItems from '../NavItems/NavItems';

const Navbar = ({ open, close, display, loginClicked }) => {
    return (
        <nav className="nav-bar" >
            <div >
                <Burger 
                clicked={display ? close : open} 
                burgerOpened={display} />
            </div>
            <div className="nav-logo">LOGO</div>
            <div className="nav-space" />
            <NavItems loginClicked={loginClicked} clicked={close} mode='horizontal' />
        </nav>
    );
};

export default Navbar;
