import {NavLink} from 'react-router-dom';

export const Header = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/contacts">contacts</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
            </ul>  
        </nav>
    );
};