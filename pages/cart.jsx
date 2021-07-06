import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import useIndexedDb from "../components/useIndexedDb";
import Blobcard from "../components/Blobcard";

import { Table, Text, Button, Box, Column, Heading, TextField } from "gestalt";

const Cart = () => {
  const [cartItems, setCartItems] = useState();

  const { removeItem, getAllItems, clearAllItems } = useIndexedDb();

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
                <Blobcard blob={object} />
              </Column>
              {/*             
              <Column span={12}>
                <Box
                  display="flex"
                  wrap
                  column={12}
                  marginTop={8}
                  marginBottom={8}
                >
                  <Column smSpan={12} mdSpan={4}>
                    <svg
                      width="256"
                      height="256"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke={object.strokeColor}
                        strokeWidth={object.strokeWidth}
                        fill={object.fillColor}
                        d={object.svgPath}
                      />
                    </svg>
                  </Column>
                  <Column smSpan={12} mdSpan={4}>
                    <Heading>{object.name}</Heading>
                    <Table>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>Fill</Table.Cell>
                          <Table.Cell>{object.fillColor}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Stroke</Table.Cell>
                          <Table.Cell>
                            {object.strokeWidth == 0
                              ? "None"
                              : object.strokeWidth}
                          </Table.Cell>
                        </Table.Row>
                        {object.strokeWidth > 0 && (
                          <Table.Row>
                            <Table.Cell>Stroke Color</Table.Cell>
                            <Table.Cell>{object.strokeColor}</Table.Cell>
                          </Table.Row>
                        )}
                        <Table.Row>
                          <Table.Cell>Sharpness</Table.Cell>
                          <Table.Cell>{object.extraPoints}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Points</Table.Cell>
                          <Table.Cell>{object.randomness}</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Column>
                  <Column smSpan={12} mdSpan={4} lgSpan={3}>
                    <Button
                      text="Delete"
                      size="lg"
                      onClick={() => {
                        removeItem(key);
                        removeItemFromState(key);
                      }}
                    />
                  </Column>
                </Box>
              </Column> */}
            </>
          ))}
      </Box>
    </Layout>
  );
};

export default Cart;
