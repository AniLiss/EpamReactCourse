import React from 'react';
import './search.scss';
import {SearchButton} from '../search-btn/serch-btn';

export const Search = () => {
    return (
        <div className="search">
            <h2 className="search__title">Find your movie</h2>
            <input className="search__input" />
            <div className="search__filters">
                <h2 className="search__filters-title">Search by</h2>
                <button className="search__filters-item search__filters-item--active">Title</button>
                <button className="search__filters-item">Genre</button>
            </div>
            <SearchButton />
        </div>
    )
};
