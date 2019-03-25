import React from 'react';
import {composeMovieCards} from './compose-movie-cards';

const mockData = [
    {
        title: 'Kill Bill. Vol. 1',
        release_date: 2003,
        genre: 'Action & Adventure'
    },
    {
        title: 'Kill Bill. Vol. 2',
        release_date: 2004,
        genre: 'Action & Adventure'
    },
    {
        title: 'Pulp Fiction',
        release_date: 1994,
        genre: 'Oscar-winning Movie'
    }
];

export const MovieCards = () => {
    return (<div className="movies-cards">
        {composeMovieCards(mockData)}
    </div>)
};
