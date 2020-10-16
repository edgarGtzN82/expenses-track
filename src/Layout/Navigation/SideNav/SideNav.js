import React from 'react';
import "../Nav.css";
import 'antd/dist/antd.css';
import NavItems from '../NavItems/NavItems';


const SideNav = ({ close, display }) => {
    let Classes = "side-nav-bar";
    if (display) {
        Classes = "side-nav-bar open";
    }
    return (
        <nav className={Classes}>
            <NavItems clicked={close} mode='inline' />
        </nav>
    );
};

export default SideNav;