import React from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header';

// import clsx from 'clsx';
// import styles from './Layout.module.scss'


const Layout = () => {
    return (
        <div className='' style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            minHeight: '100vh',
        }}>
            <Header />
            <Outlet />
            {/* //footer */}
        </div>
    );
};

export default Layout;