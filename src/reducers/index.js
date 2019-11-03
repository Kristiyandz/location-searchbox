import { combineReducers } from 'redux';
import { locationsReducer } from './locationsReducer';



export const reducers = combineReducers({
  loactionsData: locationsReducer
});