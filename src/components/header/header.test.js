import {mount} from 'enzyme';
import React from 'react';
import {Header} from './header';

describe('Header', () => {
    it('is expected to render header correct', () => {
        const wrapper = mount(<Header />);
        expect(wrapper).toMatchSnapshot();
    })
});
