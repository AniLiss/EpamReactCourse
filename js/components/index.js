import React from 'react';
// import {Hello} from './hello';
import {Header} from './header/header';
import {MovieCards} from './movie-cards/movie-cards'

export class App extends React.PureComponent {
    render() {
        return (
            <>
                <Header />
                <MovieCards />
            </>
        )
    }
}
