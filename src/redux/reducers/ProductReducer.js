import Actions from '../actions';
import {reducerAdvance, reducerDefault} from '../common/reducers';

export const product = (...props) => {
  return reducerAdvance(...props, Actions.GET_PRODUCT);
};

export const productSale = (...props) => {
  return reducerAdvance(...props, Actions.GET_PRODUCT_SALE);
};

export const productDetails = (...props) => {
  return reducerDefault(...props, Actions.GET_PRODUCT_BY_ID);
};

export const productDetailsShop = (...props) => {
  return reducerDefault(...props, Actions.GET_PRODUCT_DETAILS_BY_SHOP);
};
export const productDetailsByCategory = (...props) => {
  return reducerDefault(...props, Actions.GET_PRODUCT_BY_CATEGORY);
};

export const productFavorite = (...props) => {
  return reducerDefault(...props, Actions.GET_PRODUCT_FAVORITE);
};
export const addProductFavorite = (...props) => {
  return reducerDefault(...props, Actions.ADD_PRODUCT_FAVORITE);
};

export const checkProductFavorite = (...props) => {
  return reducerDefault(...props, Actions.CHECK_PRODUCT_FAVORITE);
};

export const productViewed = (...props) => {
  return reducerDefault(...props, Actions.GET_PRODUCT_VIEWED);
};

export const addProductViewed = (...props) => {
  return reducerDefault(...props, Actions.ADD_PRODUCT_VIEWED);
};
export const addProductReview = (...props) => {
  return reducerDefault(...props, Actions.ADD_PRODUCT_REVIEW);
};
export const updateProductReview = (...props) => {
  return reducerDefault(...props, Actions.UPDATE_PRODUCT_REVIEW);
};

export const productReview = (...props) => {
  return reducerDefault(...props, Actions.GET_PRODUCT_REVIEW);
};

export const searchProduct = (...props) => {
  return reducerAdvance(...props, Actions.SEARCH_KEYWORD_PRODUCT);
};

export const ProductReducer = {
  product,
  productSale,
  productDetails,
  productDetailsShop,
  productDetailsByCategory,
  productFavorite,
  addProductFavorite,
  checkProductFavorite,
  productViewed,
  addProductViewed,
  addProductReview,
  updateProductReview,
  productReview,
  searchProduct,
};
