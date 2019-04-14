import React from 'react';
import {composeMovieCards} from './compose-movie-cards';
import {mockData} from './fixtures';

export const MovieCards = () => {
    return (<div className="movies-cards">
        {composeMovieCards(mockData)}
    </div>)
};
