import React, { useState } from 'react';
import {
    CompassFilled,
    HeartOutlined,
    HomeFilled,
    MailOutlined,
    PlayCircleOutlined,
    PlusSquareOutlined,
    SearchOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import AppRoutes from '../AppRoutes/AppRoutes';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: '/', icon: <HomeFilled />, label: 'Home' },
    { key: '2', icon: <SearchOutlined />, label: 'Search' },
    { key: '3', icon: <CompassFilled />, label: 'Explore' },
    { key: '4', icon: <PlayCircleOutlined />, label: 'Reel' },
    { key: '5', icon: <MailOutlined />, label: 'Messages' },
    { key: '6', icon: <HeartOutlined />, label: 'Notification' },
    { key: '7', icon: <PlusSquareOutlined />, label: 'Create' },
    { key: '8', icon: <UserOutlined />, label: 'Profile' },
];

const Layout = () => {

    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "13%" }}>
                <Menu
                    defaultSelectedKeys={['/']}
                    mode="inline"
                    items={items}
                    style={{ height: '100vh' }}
                />
            </div>
            <div style={{ width: "87%", margin:"5px" }}>
                <AppRoutes />
            </div>
        </div>
    );
};

export default Layout;