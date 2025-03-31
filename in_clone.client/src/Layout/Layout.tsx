import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../AppRoutes/AppRoutes';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: '/', icon: <HomeFilled />, label: 'Home' },
    { key: '/search', icon: <SearchOutlined />, label: 'Search' },
    { key: '/explore', icon: <CompassFilled />, label: 'Explore' },
    { key: '/reel', icon: <PlayCircleOutlined />, label: 'Reel' },
    { key: '/messages', icon: <MailOutlined />, label: 'Messages' },
    { key: '/notification', icon: <HeartOutlined />, label: 'Notification' },
    { key: '/create', icon: <PlusSquareOutlined />, label: 'Create' },
    { key: '/profile', icon: <UserOutlined />, label: 'Profile' },
];

const Layout = () => {
    const navigate = useNavigate();

    const handleMenuClick = (e: { key: string }) => {
        navigate(e.key);
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "13%" }}>
                <Menu
                    defaultSelectedKeys={['/']}
                    selectedKeys={[location.pathname]}
                    mode="inline"
                    items={items}
                    onClick={handleMenuClick}
                    style={{ height: '100vh' }}
                />
            </div>
            <div style={{ width: "87%", margin: "5px" }}>
                <AppRoutes />
            </div>
        </div>
    );
};

export default Layout;
