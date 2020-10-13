import React from 'react';
import "../Nav.css";

const SideNav = ({ close, display }) => {
    let Classes = "side-nav-bar";
    if (display) {
        Classes = "side-nav-bar open";
    }
    return (
        <nav className={Classes}>
            <ul>
                <li onClick={close}>
                    <i className="material-icons">close</i>
                </li>
                <li onClick={close} > Dashboard </li>
                <li onClick={close} > Services</li>
            </ul>
        </nav>
    );
};

export default SideNav;