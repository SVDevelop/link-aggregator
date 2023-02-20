import React from 'react';
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header/Header';

import clsx from 'clsx';
import styles from '@components/Layout/Layout.module.scss'
import { Footer } from '../Footer/Footer';


const Layout = () => {
    return (
        <div className={clsx(styles.wrapper)} >
            <Header />
            <div className={clsx(styles.content)}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
