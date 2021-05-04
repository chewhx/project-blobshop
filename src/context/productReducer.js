import {
  PRODUCTS_ADD_ITEM,
  PRODUCTS_REMOVE_ITEM,
  PRODUCTS_CLEAR_ITEMS,
} from "./constants";
import products from "../data/products.json";

const currLocalStorageColors =
  JSON.parse(localStorage.getItem("products")) || {};

export const productsInitialState = {
  ...products[0],
  ...currLocalStorageColors,
};

export const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case PRODUCTS_ADD_ITEM:
      return addProduct(state, payload);
    case PRODUCTS_REMOVE_ITEM:
      return removeProduct(state, payload);
    case PRODUCTS_CLEAR_ITEMS:
      return state;
    default:
      break;
  }
};

const addProduct = (state, payload) => {
  const existProduct = state[payload._id];
  if (existProduct) return state;
  if (!existProduct) {
    const currLocalStorageColors =
      JSON.parse(localStorage.getItem("products")) || {};

    localStorage.setItem(
      "products",
      JSON.stringify({
        ...currLocalStorageColors,
        [payload._id]: payload,
      })
    );
    return { ...state, [payload._id]: payload };
  }
};

const removeProduct = (state, payload) => {
  const newState = { ...state };
  delete newState[payload];
  const currLocalStorageColors =
    JSON.parse(localStorage.getItem("products")) || {};
  delete currLocalStorageColors[payload];
  localStorage.setItem("products", JSON.stringify(currLocalStorageColors));
  return newState;
};
