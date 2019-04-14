import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './movie-card';

const wrapper = shallow(
    <MovieCard
        title='Title'
        releaseDate='02/03/1994'
        genre='drama'
    />
);

describe('MovieCard', () => {
    it('is expected to render MovieCard correctly', () => {
       expect(wrapper).toMatchSnapshot();
       expect(wrapper.find('article').exists()).toBe(true);
    })
});
