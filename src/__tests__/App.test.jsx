import React from 'react';
import { shallow } from '../enzyme';
import App from '../App';

describe('App.js tests', () => {
  it('Should render App without crashing', () => {
    // Act
    shallow(<App/>);
  });

  it('App.js should render MainWrapper component', () => {
    // Act
    const wrapper = shallow(<App/>);

    // Assert
    expect(wrapper.find('MainWrapper')).toHaveLength(1);
    expect(wrapper.find('MainWrapper')).toBeDefined();
  });
});
