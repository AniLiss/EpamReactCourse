import React from 'react';
import {shallow} from 'enzyme';
import {ErrorBoundary} from './error-boundary';

describe('Error Boundary', () => {
    it('is expected to render erroe message', () => {
        const wrapper = shallow(<ErrorBoundary />);
        wrapper.setState({error: 'Something went terribly wrong'});
        expect(wrapper).toMatchSnapshot();
    })
});
