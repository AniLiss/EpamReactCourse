import {mount} from 'enzyme';
import React from 'react';
import {Footer} from './footer';

describe('Footer', () => {
    it('is expected to render footer correct', () => {
        const wrapper = mount(<Footer />);
        expect(wrapper).toMatchSnapshot();
    })
});
