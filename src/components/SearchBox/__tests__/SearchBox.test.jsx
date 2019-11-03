import React from 'react';
import { Provider } from "react-redux";
import { shallow, mount } from '../../../enzyme';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import SearchInput from '../SearchBox';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  isLoading: false,
  lcoations: [{}]
});

describe('MainWrapper.jsx tests', () => {
  it('Should render SearchBox without crashing', () => {
    // Act
    shallow(
      <Provider store={store}>
        <SearchInput {...store}/>
      </Provider>
    );
  });
});