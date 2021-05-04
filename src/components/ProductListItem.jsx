import React, { useState, useContext } from "react";
import { Row, Col, ListGroup, Button, Form } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../context/constants";
import PropTypes from "prop-types";

const ProductListItem = ({ product }) => {
  const [qty, setQty] = useState(product.qty);
  const { dispatchCart, products } = useContext(GlobalContext);

  return (
    <ListGroup.Item>
      <Row>
        <Col md={4}>
          <svg
            width="150"
            height="150"
            viewBox={products[product._id].svg.viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform={products[product._id].svg.transform}>
              <path
                stroke="none"
                strokeWidth="0"
                fill={`#${products[product._id]._id}`}
                d={products[product._id].svg.path}
              />
            </g>
          </svg>
          <p>
            {`$${Number(product.subTotal).toFixed(2)}`}
            <br />
            <small>${Number(product.price).toFixed(2)} / blob</small>
          </p>
        </Col>
        <Col md={8}>
          <h4>{products[product._id].name}</h4>
          Qty
          <Form.Control
            type="number"
            className="w-50"
            min={1}
            max={99}
            value={qty}
            onChange={(e) => {
              if (!e.target.value) {
                setQty((prevQty) => prevQty);
              }
              setQty(e.target.value);
              dispatchCart({
                type: CART_ADD_ITEM,
                payload: {
                  _id: product._id,
                  qty: Number(e.target.value),
                  mode: product.mode,
                  price: product.price,
                  subTotal: (product.price * Number(e.target.value)).toFixed(2),
                },
              });
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                setQty((prevQty) => prevQty);
              }
              dispatchCart({
                type: CART_ADD_ITEM,
                payload: {
                  _id: product._id,
                  qty: Number(e.target.value),
                  mode: product.mode,
                  price: product.price,
                  subTotal: (product.price * Number(e.target.value)).toFixed(2),
                },
              });
            }}
          />
          <Button
            size="sm"
            type="button"
            variant="link"
            className="my-2"
            onClick={() =>
              dispatchCart({
                type: CART_REMOVE_ITEM,
                payload: product._id,
              })
            }
          >
            Remove
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ProductListItem;

ProductListItem.propTypes = {
  product: PropTypes.object,
};
