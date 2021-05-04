import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const Giftcard = () => {
  return (
    <>
      <div className="mx-auto w-50">
        <h1 className="text-center">Gift cards</h1>
        <p className="text-center">$25.00</p>
        <Row className="mb-3">
          <Col xs={10}>Quantity</Col>
          <Col xs={2}>
            <Form.Control type="number" placeholder="1" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={2}>Values</Col>
          <Col xs={10}>
            <Form.Control as="select">
              <option>$25.00</option>
              <option>$50.00</option>
              <option>$100.00</option>
            </Form.Control>
          </Col>
        </Row>
        <Button
          block
          type="button"
          variant="outline-primary"
          className="rounded-pill py-3"
        >
          Add to Cart
        </Button>
        <Button
          block
          type="button"
          variant="primary"
          className="rounded-pill py-3"
        >
          Buy It Now
        </Button>
      </div>
      <p className="text-center w-50 mx-auto mt-5">
        Your friends and family deserve the gift of good food and we can help
        make that happen. A perfect gift for those you love!
      </p>
    </>
  );
};

export default Giftcard;
