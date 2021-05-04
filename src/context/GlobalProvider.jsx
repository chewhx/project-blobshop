import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { cartReducer, cartInitialState } from "./cartReducer";
import { productsReducer, productsInitialState } from "./productReducer";
import appleui from "../data/appleui.json";

export const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [currLocalStorageColors, setCurrLocalStorageColors] = useState(
    JSON.parse(localStorage.getItem("localColors")) || []
  );

  const [products, dispatchProducts] = useReducer(
    productsReducer,
    productsInitialState
  );

  const [cart, dispatchCart] = useReducer(
    cartReducer,
    JSON.parse(localStorage.getItem("cart")) || cartInitialState
  );

  useEffect(() => {}, [currLocalStorageColors]);

  console.log(products);

  // const addProduct = (node) => {
  //   if (!currLocalStorageColors) {
  //     localStorage.setItem("localColors", JSON.stringify([node]));
  //     setProducts((prevProducts) => [...prevProducts, node]);
  //   }
  //   if (currLocalStorageColors) {
  //     let existItem = currLocalStorageColors.find(
  //       (each) => each._id === node._id
  //     );
  //     if (existItem) return;
  //     if (!existItem) {
  //       localStorage.setItem(
  //         "localColors",
  //         JSON.stringify([...currLocalStorageColors, node])
  //       );
  //       setCurrLocalStorageColors((prev) => [...prev, node]);
  //       productsObject.append(node._id, node);
  //       setProducts((prevProducts) => [...prevProducts, node]);
  //     }
  //   }
  // };

  // const deleteProduct = (productId) => {
  //   console.log(`delete ${productId}`);
  //   let tempArr = [...products];
  //   tempArr.filter((each) => each._id !== productId);
  //   let localColors = currLocalStorageColors.filter(
  //     (each) => each._id !== productId
  //   );
  //   setProducts(tempArr);
  //   setCurrLocalStorageColors(localColors);
  //   localStorage.setItem("localColors", JSON.stringify(localColors));
  // };

  return (
    <GlobalContext.Provider
      value={{
        products,
        dispatchProducts,
        cart,
        dispatchCart,
        appleui,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
