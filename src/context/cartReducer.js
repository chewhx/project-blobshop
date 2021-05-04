import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR_ITEMS } from "./constants";

export const cartInitialState = {
  items: {},
  prices: {
    subTotal: 0,
    discount: 0,
    grandTotal: 0,
  },
};

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM:
      return addToCart(state, payload);
    case CART_REMOVE_ITEM:
      return removeFromCart(state, payload);
    case CART_CLEAR_ITEMS:
      return { ...cartInitialState };
    default:
      return state;
  }
};

const addToCart = (state, payload) => {
  // make a copy of the items
  let newItems = { ...state.items };
  // update node of existing item
  newItems[payload._id] = payload;
  // make a copy of the prices
  const newPrices = { ...state.prices, subTotal: 0, grandTotal: 0 };
  // calculate new subTotal, and grandTotal
  for (let key in newItems) {
    newPrices.subTotal += newItems[key]["price"] * newItems[key]["qty"];
  }
  newPrices.grandTotal = newPrices.subTotal - newPrices.discount;
  localStorage.setItem(
    "cart",
    JSON.stringify({ items: newItems, prices: newPrices })
  );
  return {
    items: newItems,
    prices: newPrices,
  };
};

const removeFromCart = (state, payload) => {
  // make new copy of items
  let newItems = { ...state.items };
  delete newItems[payload];
  let newPrices = { ...state.prices, subTotal: 0, grandTotal: 0 };
  for (let key in newItems) {
    newPrices.subTotal += newItems[key]["price"] * newItems[key]["qty"];
  }
  newPrices.grandTotal = newPrices.subTotal - newPrices.discount;
  localStorage.setItem(
    "cart",
    JSON.stringify({ items: newItems, prices: newPrices })
  );
  return {
    items: newItems,
    prices: newPrices,
  };
};
