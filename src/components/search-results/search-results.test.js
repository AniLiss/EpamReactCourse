import React from 'react';
import {shallow} from 'enzyme';
import { SearchResults } from './search-results';

const wrapper = shallow(<SearchResults />);

describe('SearchResults', () => {
    it('is expected to render SearchResults correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
