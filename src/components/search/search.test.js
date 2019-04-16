import React from 'react';
import {mount} from 'enzyme';
import { Search } from './search';

const wrapper = mount(<Search />);

describe('Search', () => {
    it('is expected to render Search correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('is expected to test search state', () => {
        const wrapper = mount(<Search />);
        expect(wrapper.state().isButtonActive).toEqual(false);
        wrapper.find('.search-btn').at(0).simulate('click');
        expect(wrapper.state().isButtonActive).toEqual(true);
    });
});
