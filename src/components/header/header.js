import React from 'react';
import {Search} from '../search/search';
import {Button} from '../search-btn/serch-btn';
import {SearchResults} from '../search-results/search-results';
import {Movie} from '../movie-info/movie-info';
import {Logo} from '../logo/logo';

import './header.scss';

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <Logo />
                <Button text="Search" light />
            </nav>
            <Search />

            <Movie />
            <SearchResults />
        </header>
    )
};
