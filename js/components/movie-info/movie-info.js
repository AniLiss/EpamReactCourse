import React from 'react';
import './movie-info.scss';

export const Movie = () => {
    return (
        <section className="movie">
            <div className="movie__img">
                <img width="200" height="400" alt="Pulp Fiction" />
            </div>
            <div className="movie__info">
                <h2 className="movie__title">Pulp Fiction</h2>
                <h3 className="movie__short-desc">Oscar Winning Movies</h3>
                <span className="movie__year">1994</span>
                <span className="movie__duration">154 min</span>
                <p className="movie__long-desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
        </section>
    )
}
