import React from 'react';
import {MovieCard} from '../movie-card/movie-card';

export const composeMovieCards = (data) => {
    return data.map((item, index) =>
         <MovieCard
            key={index}
            title={data.title}
            releaseDate={data.release_date}
            genre={data.genre}
        />
    )
};
