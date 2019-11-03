import axios from 'axios';

export const LOADING_LOCATIONS_START = 'LOADING_LOCATIONS';
export const loadingLocations = () => ({
  type: LOADING_LOCATIONS_START,
});

export const LOADING_LOCATIONS_SUCCESS = 'LOADING_LOCATIONS_SUCCESS';
export const loadingLocationsSuccess = locations => ({
  type: LOADING_LOCATIONS_SUCCESS,
  payload: locations,
});

export const LOADING_LOCATIONS_FAIL = 'LOADING_LOCATIONS_FAIL';
export const loadingLocationsFail = () => ({
  type: LOADING_LOCATIONS_FAIL
});

export const fetchLocations = searchTerm => async dispatch => {
  if(searchTerm.length === 1) return;
  dispatch(loadingLocations());
  try {
    const response = await axios.get(`https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${searchTerm}`);

    if(response.data.results.docs.length === 0) {
      return dispatch(loadingLocationsFail());
    };
    if(response.status === 200) {
      return dispatch(loadingLocationsSuccess(response.data));
    }
    return dispatch(loadingLocationsFail());
  } catch(err) {
    console.log(err);
  }
};

export const CLEAR_LOACTIONS_DATA = 'CLEAR_LOACTIONS_DATA';
export const clearLocations = () => ({
  type: CLEAR_LOACTIONS_DATA,
  payload: [],
});

export const SET_SELECTED_LOCATION = 'SET_SELECTED_LOCATION';
export const setSelectedLocation = location => ({
  type: SET_SELECTED_LOCATION,
  payload: location,
});