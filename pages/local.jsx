import React, { useState, useEffect } from "react";
import Layout from "../layouts/_layout";
import useIndexedDb from "../hooks/useIndexedDb";
import BlobcardLocal from "../components/BlobcardLocal";
import useWindowSize from "../hooks/useWindowSize";

import { Button, Box, Column } from "gestalt";

const Cart = () => {
  const [cartItems, setCartItems] = useState();

  const { getAllItems, clearAllItems } = useIndexedDb();

  useEffect(() => {
    getAllItems().then((values) => setCartItems(values));
  }, []);

  const removeItemFromState = (key) => {
    setCartItems((prev) => {
      const newItems = prev.filter((each) => each[0] !== key);
      return newItems;
    });
  };

  const { width } = useWindowSize();

  return (
    <Layout>
      <Box display="flex" justifyContent={width <= 574 ? "center" : "end"}>
        <Button
          text="Delete All"
          size="lg"
          onClick={() => {
            clearAllItems();
            setCartItems();
          }}
        />
      </Box>

      <Box display="flex" direction="row" wrap justifyContent="center">
        {cartItems &&
          cartItems.map(([key, object], idx) => (
            <>
              <Column smSpan={6} mdSpan={4} lgSpan={3} key={`blobs-${idx}`}>
                <BlobcardLocal
                  blob={object}
                  blobKey={key}
                  removeItemFromState={removeItemFromState}
                />
              </Column>
            </>
          ))}
      </Box>
    </Layout>
  );
};

export default Cart;
