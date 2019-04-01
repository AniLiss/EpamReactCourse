import React from 'react';
import {MovieCard} from '../movie-card/movie-card';

export const composeMovieCards = (data) => {
    console.log('data', data);
    return data.map((item, index) =>
         <MovieCard
            key={index}
            title={item.title}
            releaseDate={item.release_date}
            genre={item.genre}
        />
    );
};
