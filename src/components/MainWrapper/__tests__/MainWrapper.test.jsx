import React from 'react';
import { shallow } from '../../../enzyme';
import MainWrapper from '../MainWrapper';

describe('MainWrapper.jsx tests', () => {
  it('Should render MainWrapper without crashing', () => {
    // Act
    shallow(<MainWrapper/>);
  });

  it('MainWrapper.js should have h3 with a title', () => {
    // Act
    const wrapper = shallow(<MainWrapper/>);
    // Assert
    expect(wrapper.find('h3').text()).toEqual('Where are you going?');
  });

  it('MainWrapper.js should have label tag with content', () => {
    // Act
    const wrapper = shallow(<MainWrapper/>);
    // Assert
    expect(wrapper.find('label').text()).toEqual('Pick-up Location');
  });
});