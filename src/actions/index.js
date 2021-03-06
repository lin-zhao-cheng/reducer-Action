import {
  SET_PAGE_TITLE,
  SET_PAGE_CONTENT,
  SET_NAVBAR_ACTIVEITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  SET_PRODUCT_DETAIL,
  BEGIN_PRODUCTS_FEED,
  SUCCESS_PRODUCTS_FEED,
  FAIL_PRODUCTS_FEED,
  BEGIN_PRODUCTS_REQUEST,
  SUCCESS_PRODUCTS_REQUEST,
  FAIL_PRODUCTS_REQUEST,
} from "../utils/constants";

import { getProducts, getProductById, feedProducts ,feedMaps,feedMedias,feedMods,feedTextures } from "../api";

export const addCartItem = (dispatch, product, ver,edi) => {
  const item = {
    id: product.id,
    category: product.category,
    title: product.title,
    image: product.image,
    category2: product.category2,
    version: product.version,
    edition: product.edition,
    ver:ver,
    edi:edi,
  };
  dispatch({
    type: ADD_CART_ITEM,
    payload: item,
  });
};

export const removeCartItem = (dispatch, productId) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: productId,
  });
};

export const feedJSONToFirebase = async (dispatch) => {
  dispatch({ type: BEGIN_PRODUCTS_FEED });
  try {
    await feedProducts();
    dispatch({ type: SUCCESS_PRODUCTS_FEED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_FEED, payload: error });
  }
}
export const feedJSON2ToFirebase = async (dispatch) => {
  dispatch({ type: BEGIN_PRODUCTS_FEED });
  try {
    await feedMaps();
    dispatch({ type: SUCCESS_PRODUCTS_FEED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_FEED, payload: error });
  }
}
export const feedJSON3ToFirebase = async (dispatch) => {
  dispatch({ type: BEGIN_PRODUCTS_FEED });
  try {
    await feedTextures();
    dispatch({ type: SUCCESS_PRODUCTS_FEED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_FEED, payload: error });
  }
}
export const feedJSON4ToFirebase = async (dispatch) => {
  dispatch({ type: BEGIN_PRODUCTS_FEED });
  try {
    await feedMods();
    dispatch({ type: SUCCESS_PRODUCTS_FEED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_FEED, payload: error });
  }
}
export const feedJSON5ToFirebase = async (dispatch) => {
  dispatch({ type: BEGIN_PRODUCTS_FEED });
  try {
    await feedMedias();
    dispatch({ type: SUCCESS_PRODUCTS_FEED });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_FEED, payload: error });
  }
}

export const setProductDetail = async (dispatch, productId,ver,edi) => {
  dispatch({ type: BEGIN_PRODUCTS_REQUEST });
  try {
    const product = await getProductById(productId);
      dispatch({
        type: SET_PRODUCT_DETAIL,
        payload: {
          product,
          ver,
          edi,
        }
      })
    dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
  }
}

export const setPage = async (dispatch, url, title) => {
  let products = [];
  dispatch({ type: BEGIN_PRODUCTS_REQUEST });
  dispatch({
    type: SET_PAGE_TITLE,
    payload: title,
  });
  try {
    products = await getProducts(url);
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: { title, products },
    });
    dispatch({
      type: SET_NAVBAR_ACTIVEITEM,
      payload: url,
    });    
    dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
  }
}
