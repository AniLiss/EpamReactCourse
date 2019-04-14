import {shallow} from 'enzyme';
import React from 'react';
import {Logo} from './logo';

describe('Logo', () => {
    it('is expected to render logo correct', () => {
        const wrapper = shallow(<Logo />);
        expect(wrapper).toMatchSnapshot();
    })
});
