import {
  fetchLocations,
  LOADING_LOCATIONS_START,
  LOADING_LOCATIONS_SUCCESS,
  LOADING_LOCATIONS_FAIL,
} from '../actions/index';

const initialState = {
  isLoading: false,
  locations: [],
};

export const locationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING_LOCATIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_LOCATIONS_SUCCESS:
      console.log(action.payload, 'this is the payload')
      return {
        ...state,
        isLoading: false,
        locations: action.payload.results.docs,
      };
    default:
      return state;
  };
};