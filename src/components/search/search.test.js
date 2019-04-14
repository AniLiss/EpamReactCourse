import React from 'react';
import {shallow} from 'enzyme';
import { Search } from './search';

const wrapper = shallow(<Search />);

describe('Search', () => {
    it('is expected to render Search correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
