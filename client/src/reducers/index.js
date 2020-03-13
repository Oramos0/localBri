import { combineReducers } from 'redux';
// * Our Reducers
import productReducer from './productReducer';
import authReducer from './authReducer';
import alertReducer from './alertReducer';

const allReducers = combineReducers({
  products: productReducer,
  auth: authReducer,
  alert: alertReducer
});

export default allReducers;
