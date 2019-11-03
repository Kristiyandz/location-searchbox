import {
  LOADING_LOCATIONS_START,
  LOADING_LOCATIONS_SUCCESS,
  LOADING_LOCATIONS_FAIL,
  SET_SELECTED_LOCATION,
  CLEAR_LOACTIONS_DATA
} from '../actions/index';

const initialState = {
  isLoading: false,
  locations: [],
  isLocationSelected: false,
  selectedLocation: '',
  noResults: false,
};

export const locationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING_LOCATIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_LOCATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        locations: action.payload.results.docs,
      };
    case LOADING_LOCATIONS_FAIL:
      return {
        ...state,
        noResults: true,
      };
    case CLEAR_LOACTIONS_DATA:
      return {
        ...state,
        locations: action.payload,
        isLocationSelected: false,
        selectedLocation: ''
      }
    case SET_SELECTED_LOCATION:
      return {
        ...state,
        isLocationSelected: true,
        selectedLocation: action.payload,
      }
    default:
      return state;
  };
};