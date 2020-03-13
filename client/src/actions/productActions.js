import uuid from 'uuid';
import axios from 'axios';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PRODDUCT,
  FILTER_PRODUCT,
  CLEAR_FILTER,
  GET_ALL_PRODUCTS,
  GET_USER_PRODUCTS,
  CLEAR_ALL_PRODUCTS,
  CLEAR_USER_PRODUCTS,
  PRODUCT_ERROR,
  ADD_PRODUCT_IMAGE
} from './types';

// Add product
export const addProduct = (product, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const resImage = await axios.post('/api/products/images', formData);

    product.galeryImgUrls = resImage.data;

    const res = await axios.post('/api/products', product, config);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};
// Delete product
export const deleteProduct = id => async dispatch => {
  try {
    await axios.delete(`/api/products/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};
// Set current product

// Clear current product
export const clearCurrentProduct = () => dispatch => {
  dispatch({
    type: CLEAR_CURRENT
  });
};

// Update product

// Filter products
export const filterProduct = text => dispatch => {
  dispatch({
    type: FILTER_PRODUCT,
    payload: text
  });
};

// Clear Filter
export const clearFilter = () => dispatch => {
  dispatch({
    type: CLEAR_FILTER
  });
};

// Get all products just for the gallery
export const getAllProducts = () => async dispatch => {
  try {
    const res = await axios.get('api/products/all');
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};

// Get user product
export const getUserProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');

    dispatch({
      type: GET_USER_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};
// Clear all products

// Clear user products

// Add product images
export const addProductImages = formData => async dispatch => {
  try {
    const res = await axios.post('/api/products/images', formData);
  } catch (error) {}
};
