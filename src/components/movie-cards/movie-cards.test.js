import React from 'react';
import {shallow} from 'enzyme';
import { MovieCards } from './movie-cards';

const wrapper = shallow(<MovieCards />);

describe('MovieCards', () => {
    it('is expected to render MovieCards correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
