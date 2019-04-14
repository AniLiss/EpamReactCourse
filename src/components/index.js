import React from 'react';
// import {Hello} from './hello';
import {Header} from './header/header';
import {MovieCards} from './movie-cards/movie-cards'
import {Footer} from './footer/footer';
import './common.scss';
import {ErrorBoundary} from './error-boundary/error-boundary'

export class App extends React.PureComponent {
    render() {
        return (
            <ErrorBoundary>
                <Header />
                <MovieCards />
                <Footer />
            </ErrorBoundary>
        )
    }
}
