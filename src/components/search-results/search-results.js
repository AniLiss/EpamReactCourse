import React from 'react';
import './search-results.scss'

export const SearchResults  = () => {
    return (
        <div className="search-results">
            <div className="search-results__movies">
                7 movies found
            </div>
            <ul className="search-results__filters-list">
                <li className="search-results__filters-item">Sort by</li>
                <li className="search-results__filters-item">release date</li>
                <li className="search-results__filters-item">rating</li>
            </ul>

            <div className="search-results__suggestions">
                Films by <span>Drama genre</span>
            </div>
        </div>
    )
};
