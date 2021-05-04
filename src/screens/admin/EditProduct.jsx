import React, { useContext, useState } from "react";
import { Col, Row, ListGroup, Button } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalProvider";
import PropTypes from "prop-types";
import { PRODUCTS_REMOVE_ITEM, CART_REMOVE_ITEM } from "../../context/constants";
import PageTop from "../../components/PageTop";

const ListItem = ({ product }) => {
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const { dispatchProducts, dispatchCart, cart } = useContext(GlobalContext);
  return !product ? (
    "Loading"
  ) : (
    <ListGroup.Item hidden={show}>
      <Row>
        <Col md={2}>{product._id.toUpperCase()}</Col>
        <Col md={2} style={{ backgroundColor: `#${product._id}` }}></Col>
        <Col md={2}>{product.name}</Col>
        <Col sm={2}>{product.theme}</Col>
        <Col sm={2}>RGBA</Col>
        <Col sm={2}>
          {product.theme !== "User" ? (
            <Button type="button" variant="outline-danger" size="sm">
              Hide
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline-danger"
              size="sm"
              onClick={() => {
                dispatchProducts({
                  type: PRODUCTS_REMOVE_ITEM,
                  payload: product._id,
                });
                if (cart.items[product._id]) {
                  dispatchCart({
                    type: CART_REMOVE_ITEM,
                    payload: product._id,
                  });
                }
              }}
            >
              Delete
            </Button>
          )}
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

const EditProductScreen = () => {
  const { products } = useContext(GlobalContext);
  return !products ? (
    "Loading"
  ) : (
    <>
      <PageTop>Edit Product</PageTop>
      <ListGroup>
        <ListGroup.Item>
          <Row>
            <Col md={2}>Product ID</Col>
            <Col md={2}></Col>
            <Col md={2}>Name</Col>
            <Col md={2}>Name</Col>
            <Col md={2}></Col>
            <Col md={2}></Col>
          </Row>
        </ListGroup.Item>
        {Object.keys(products).map((key, idx) => products[key]["theme"] === "User" && (
          <ListItem key={`editProduct-${idx}`} product={products[key]} />
        ))}
      </ListGroup>
    </>
  );
};

export default EditProductScreen;

ListItem.propTypes = {
  product: PropTypes.object,
};
