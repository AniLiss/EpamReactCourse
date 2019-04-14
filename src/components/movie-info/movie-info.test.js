import React from 'react';
import {shallow} from 'enzyme';
import { Movie } from './movie-info';

const wrapper = shallow(<Movie />);

describe('Movie', () => {
    it('is expected to render Movie correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
