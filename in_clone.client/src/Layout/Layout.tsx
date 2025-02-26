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
    { key: '1', icon: <HomeFilled />, label: 'Home', },
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
        <div className='d-flex flex-row'>
            <div style={{ width: "15%" }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                    style={{ height: '100vh' }}
                />
            </div>
            <div style={{ width: "85%" }}>
                <AppRoutes />
            </div>
        </div>
    );
};

export default Layout;