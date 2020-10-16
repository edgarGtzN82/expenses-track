import React, { useState } from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './Nav.css';
import SideNav from '../Navigation/SideNav/SideNav';
import Navbar from '../Navigation/Navbar/Navbar';
import { Route } from 'react-router-dom';
import ExpensesPage from '../../pages/Expenses/ExpensesPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';

const { Header, Content, Footer } = Layout;

const Navigation = () => {
    const [sideBar, setSideBar] = useState(false);

    const handleOpen = () => setSideBar(true);

    const handleLogin = () => console.log('Log In');;

    const handleClose = () => {
            setSideBar(false);
    };

    return (
        <div >
            <Layout className="layout">
                <Navbar
                    close={handleClose}
                    open={handleOpen}
                    display={sideBar}
                    loginClicked={handleLogin}
                />
                <SideNav
                    close={handleClose}
                    open={handleOpen}
                    display={sideBar} />
                <Content style={{ padding: '5px 5px' }}>
                    <Route path='/expense' exact component={ExpensesPage} />
                    <Route path='/login' exact component={SignUpPage} />
                </Content>
            </Layout>
            
        </div>
    );
}

export default Navigation;
