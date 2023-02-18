import React from 'react';
import { List } from '../../components/List/List';
import Search from '../../components/Search/Search';

const Home = () => {
    return (
        <div>
            <Search />
            <List />
        </div>
    );
};

export default Home;