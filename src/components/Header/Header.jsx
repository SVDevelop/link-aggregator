import {NavLink, useLocation} from 'react-router-dom';

import clsx from 'clsx';
import styles from './Header.module.scss'
const links = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'contact',
        path: '/contact',
    },
    {
        title: '123',
        path: '/contact',
    }
]
export const Header = () => {
    const {pathname} = useLocation()
    return (
        <div className={clsx(styles.header)}>
            <nav className={clsx(styles['nav'])}>
                <ul className={clsx(styles['nav_link'])}>
                    {
                        links.map(({title, path}) => (<li className={clsx(styles['nav_link-item'], {[styles.active]: pathname === path})}><NavLink to={path}>{title}</NavLink></li>))
                    }
                </ul>  
            </nav>
        </div>
    );
};