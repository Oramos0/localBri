import uuid from 'uuid';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PRODUCT,
  CLEAR_FILTER,
  GET_ALL_PRODUCTS,
  GET_USER_PRODUCTS,
  CLEAR_ALL_PRODUCTS,
  CLEAR_USER_PRODUCTS,
  PRODUCT_ERROR,
  FILTER_PRODUCT
} from '../actions/types';

// Initial State
const initialState = {
  products: [],
  userProduct: [],
  currentProduct: null,
  filteredProducts: null,
  error: null,
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          contact => contact._id !== action.payload
        ),
        loading: false
      };
    case GET_ALL_PRODUCTS:
    case GET_USER_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case FILTER_PRODUCT:
      return {
        ...state,
        filteredProducts: state.products.filter(product => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return product.productName.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredProducts: null
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentProduct: null
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
