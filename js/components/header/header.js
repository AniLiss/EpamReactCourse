import React from 'react';
import {Search} from '../search/search';
import {SearchButton} from '../search-btn/serch-btn';
import {SearchResults} from '../search-results/search-results';

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <h1>netflixroulette</h1>
                <SearchButton />
            </nav>
        <Search />
        <SearchResults />
        </header>
    )
};
