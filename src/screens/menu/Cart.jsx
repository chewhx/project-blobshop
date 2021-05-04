/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import {
  Card,
  Row,
  Col,
  ListGroup,
  Button,
  InputGroup,
  Form,
  Container,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PageTop from "../../components/PageTop";
import ProductListItem from "../../components/ProductListItem";
import { GlobalContext } from "../../context/GlobalProvider";
import { ArrowLeft } from "react-bootstrap-icons";

const CartScreen = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <Container>
      <PageTop>Shopping Cart</PageTop>
      <Row className="ml-1 mb-3">
        <Button type="button" variant="link">
          <ArrowLeft /> Continue shopping
        </Button>
      </Row>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <ListGroup variant="flush">
              {Object.keys(cart.items).length === 0 ? (
                <p className="my-5 text-center">Your shopping cart is empty!</p>
              ) : (
                Object.keys(cart.items).map((key, idx) => (
                  <ProductListItem
                    key={`productListItem-${idx}`}
                    product={cart.items[key]}
                  />
                ))
              )}
            </ListGroup>
            <Card.Footer>
              We provide free international and domestic shipping!
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <dl className="row">
                <dt className="col-sm-6">Sub-total:</dt>
                <dd className="col-sm-6 text-right">
                  ${cart.prices.subTotal.toFixed(2)}
                </dd>
              </dl>
              <hr />
              <LinkContainer to={`/checkout`}>
                <Button
                  disabled={Object.keys(cart.items).length === 0}
                  block
                  type="button"
                  variant="primary"
                >
                  Place Order
                </Button>
              </LinkContainer>
              <Button block type="button" variant="outline-primary">
                Continue Shopping
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
