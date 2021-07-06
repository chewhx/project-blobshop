import React, { useState, useEffect } from "react";
import Layout from "../layouts/_layout";
import useIndexedDb from "../hooks/useIndexedDb";
import BlobcardLocal from "../components/BlobcardLocal";

import { Table, Text, Button, Box, Column, Heading, TextField } from "gestalt";

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

  return (
    <Layout>
      <Button
        text="Delete All"
        size="lg"
        onClick={() => {
          clearAllItems();
          setCartItems();
        }}
      />

      <Box display="flex" direction="row" wrap>
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
