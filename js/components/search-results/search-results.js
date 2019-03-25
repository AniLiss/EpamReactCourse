import React from 'react';

export const SearchResults  = () => {
    return (
        <div className="search-results">
            <div className="search-results__movies">
                7 movies found
            </div>
            <ul className="search-results__filters-list">
                <li className="search-results__filters-item">release date</li>
                <li className="search-results__filters-item">rating</li>
            </ul>
        </div>
    )
};
