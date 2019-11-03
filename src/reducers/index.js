import { combineReducers } from 'redux';
import { locationsReducer } from './locationsReducer';

export const reducers = combineReducers({
  locationsData: locationsReducer,
});