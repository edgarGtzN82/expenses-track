import React, { useState } from 'react';
import './Nav.css';
import SideNav from '../Navigation/SideNav/SideNav';
import Navbar from '../Navigation/Navbar/Navbar';


const Navigation = () => {
    const [sideBar, setSideBar] = useState(false);

    const handleOpen = () => setSideBar(!sideBar);

    const handleClose = () => setSideBar(false);

    return (
        <div className="App">
            <Navbar 
                close={handleClose}
                open={handleOpen}
                display={sideBar}
                 />
   {/*          { sideBar ? (
                <div>
                    <BackDrop close={handleClose} />
                </div>
            ) : null} */}
            <SideNav
                close={handleClose}
                display={sideBar} />
        </div>
    );
}

export default Navigation;
