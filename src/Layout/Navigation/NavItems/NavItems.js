import React from 'react';
import './NavItems.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    DollarOutlined
} from '@ant-design/icons';


const NavItems = (props) => {
    
    // Instalar router para utilziar los componentes de Nav y NavLink en cada Item
    
    return (
        <Menu
            className='menu-items'
            onClick={(event) =>props.clicked(event)}
            theme="dark"
            mode={props.mode}
        >
            <Menu.Item 
                key="1" icon={<VideoCameraOutlined />}>
                <Link to='/' ></Link>
                Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DollarOutlined />}>
                <Link to='/expense' ></Link>
                Gasto
            </Menu.Item>
            <Menu.Item 
                onClick={props.loginClicked}
                key="3" 
                icon={<UserOutlined />}>
                <Link to='/login' ></Link>
                Login
            </Menu.Item>
        </Menu>
    );
}

export default NavItems;