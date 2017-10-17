import { combineReducers } from 'redux';
import * as bandsReducer from './bands';
import * as reviewsReducer from './reviews';
import * as navigationReducer from './navigation';

export default combineReducers(Object.assign(
  bandsReducer,
  reviewsReducer,
  navigationReducer
));
