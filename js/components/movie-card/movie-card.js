import React from 'react';

export const MovieCard = ({title, releaseDate, genre, key}) => {
    return (
        <article className="movie-card"  key={key}>
            <img className="movie-card__img" alt="Kill Bill. Vol. 1" />
            <div className="movie-card__desc">
                <h3 className="movie-card__title">{title}</h3>
                <span className="movie-card__year">{releaseDate}</span>
                <span className="movie-card__genre">{genre}</span>
            </div>
        </article>
    )
};
