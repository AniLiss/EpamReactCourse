import React from 'react';
import {shallow} from 'enzyme';
import { Button } from './serch-btn';

describe('Button', () => {
    it('is expected to render default Button correctly', () => {
        const wrapper = shallow(<Button text="default btn" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('is expected to render active Button correctly', () => {
        const wrapper = shallow(<Button active text="active btn"/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('is expected to render light Button correctly', () => {
        const wrapper = shallow(<Button light text="light btn"/>);
        expect(wrapper).toMatchSnapshot();
    })
});
