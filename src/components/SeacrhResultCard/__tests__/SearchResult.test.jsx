import React from 'react';
import { shallow } from '../../../enzyme';
import SearchResultCard from '../SearchResultCard';

describe('SearchResultCard.jsx tests', () => {
  it('Should render SearchResultCard without crashing', () => {
    // Arrange
    const fakeProps = {
      location: {
        name: 'Manchester Airport',
        region: 'Greater Manchester',
        country: 'United Kingdom'
      }
    };
    // Act
    shallow(<SearchResultCard {...fakeProps}/>);
  });

  it('Should render span with correct place type', () => {
    // Arrange
    const fakeProps = {
      location: {
        name: 'Manchester Airport',
        region: 'Greater Manchester',
        country: 'United Kingdom'
      }
    };
    // Act
    const wrapper = shallow(<SearchResultCard {...fakeProps}/>);

    // Assert
    expect(wrapper.find('span').text()).toEqual('Airport');
  });

  it('Should render iata text extension if provided', () => {
    // Arrange
    const fakeProps = {
      location: {
        name: 'Manchester Airport',
        region: 'Greater Manchester',
        country: 'United Kingdom',
        iata: 'MAN'
      }
    };
    // Act
    const wrapper = shallow(<SearchResultCard {...fakeProps}/>);

    // Assert
    expect(wrapper.find('h4').text()).toEqual('Manchester Airport (MAN)');
  });

  it('Should render NOT iata text extension if not provided', () => {
    // Arrange
    const fakeProps = {
      location: {
        name: 'Manchester',
        region: 'Greater Manchester',
        country: 'United Kingdom'
      }
    };
    // Act
    const wrapper = shallow(<SearchResultCard {...fakeProps}/>);
    // Assert
    expect(wrapper.find('h4').text()).toEqual('Manchester ');
  });

  it('Should render region text extension if provided', () => {
    // Arrange
    const fakeProps = {
      location: {
        name: 'Manchester',
        region: 'Greater Manchester',
        country: 'United Kingdom',
      }
    };
    // Act
    const wrapper = shallow(<SearchResultCard {...fakeProps}/>);
    // Assert
    expect(wrapper.find('p').text()).toEqual('Greater Manchester, United Kingdom');
  });

 
});