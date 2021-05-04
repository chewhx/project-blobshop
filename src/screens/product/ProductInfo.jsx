/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
// import { HeartFill } from "react-bootstrap-icons";
// import Rating from "../components/Rating";
import { GlobalContext } from "../../context/GlobalProvider";
import { CART_ADD_ITEM } from "../../context/constants";
// import FormCounter from "../../components/FormCounter";
import Input from "../../components/Input";

const ProductScreen = ({ match }) => {
  const { products, dispatchCart, cart } = useContext(GlobalContext);
  const [message, setMessage] = useState({ show: false, content: "" });
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState(products[match.params.id]);
  const [qty, setQty] = useState(
    (cart.items[product._id] && cart.items[product._id].qty) || 1
  );

  useEffect(() => {
    console.log("useEffect ran");
    return () => {
      console.log("Clean up ran");
      setTimeout(() => {
        setMessage({ show: false, content: "" });
      }, 1500);
    };
  }, [dispatchCart, message]);
  return !product ? (
    "Loading..."
  ) : (
    <>
      <Container>
        <Row>
          <Col lg={7} className="order-lg-2 mb-4">
            <svg
              width="100%"
              height="100%"
              viewBox={product.svg.viewBox}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform={product.svg.transform}>
                <path
                  stroke="none"
                  strokeWidth="0"
                  fill={`#${product._id}`}
                  d={product.svg.path}
                />
              </g>
            </svg>
          </Col>
          <Col lg={5} className="order-lg-1">
            <p className="display-3">{product.name}</p>
            <p>${product.price}</p>
            <Row>
              <Col xs={7}>Quantity</Col>
              <Col xs={5}>
                <Input.Text
                  className="my-3 mx-2"
                  type="number"
                  min={1}
                  max={99}
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
              </Col>
              <Button
                block
                type="button"
                variant="outline-primary"
                className="rounded-pill py-3 mb-4"
                onClick={() => {
                  setMessage({ show: true, content: "Success" });
                  dispatchCart({
                    type: CART_ADD_ITEM,
                    payload: {
                      _id: product._id,
                      qty: qty,
                      price: product.price,
                      subTotal: (product.price * Number(qty)).toFixed(2),
                    },
                  });
                }}
              >
                Add to Cart
              </Button>
              <p>
                Our whole grain brown bread is made fresh daily. It can stay
                fresh for up to 7 days.
              </p>
              <p>
                <i>
                  We offer same-day delivery for all orders made before 4 pm
                  between Monday and Friday. All orders placed on Saturday or
                  Sunday will be delivered the following Monday. We are only
                  shipping within Montréal at this time.
                </i>
              </p>
            </Row>
          </Col>

          {/* <Col lg={6} className="py-4 px-4">
            <Image
              fluid
              src={`https://singlecolorimage.com/get/${product._id}/590x500`}
            />
          </Col>
          <Col lg={6}>
            <Card.Body>
              <h2>{product.name}</h2>
              <Rating />
              <p>
                <span className="h4">${product.price}</span>
                <span className="text-muted"> / pixel</span>
              </p>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem iure ad repellendus reiciendis voluptatibus non?
                Nisi autem harum quo tempora in doloribus aliquam eligendi.
                Autem illo perspiciatis quasi adipisci illum!
              </Card.Text>
              <dl className="row">
                <dt className="col-sm-4">HEX Code</dt>
                <dd className="col-sm-8">{`#${product._id.toUpperCase()}`}</dd>
                <dt className="col-sm-4">Theme </dt>
                <dd className="col-sm-8">{product.theme}</dd>
                <dt className="col-sm-4">RGBA</dt>
                <dd className="col-sm-8">(2,117,216,1)</dd>
              </dl>
              <hr />
              <Form.Row className="mb-3">
                <Col xs={6} md={4}>
                  <FormCounter
                    className="my-3 mx-2"
                    label="Quantity"
                    value={qty}
                    onChange={setQty}
                  />
                </Col>
                <Col md={8}>
                  <Form.Group className="my-3 mx-2">
                    <Form.Label>Select size</Form.Label>
                    {product.mode.map((each, idx) => (
                      <Form.Check
                        key={`${product.name}-mode-${idx}`}
                        id="mode"
                        name="mode"
                        type="radio"
                        label={each}
                        value={each}
                        onChange={(e) => setMode(e.target.value)}
                      />
                    ))}
                  </Form.Group>
                </Col>
              </Form.Row>
              <Button className="mr-2" type="button" variant="primary">
                Buy now
              </Button>
              <Button
                ref={target}
                className="mr-2"
                type="button"
                variant="primary"
                onClick={() => {
                  setMessage({ show: true, content: "Success" });
                  dispatchCart({
                    type: CART_ADD_ITEM,
                    payload: {
                      _id: product._id,
                      qty: qty,
                      mode: mode,
                      price: product.price,
                      subTotal: (product.price * Number(qty)).toFixed(2),
                    },
                  });
                }}
              >
                Add to cart
              </Button>
              <Overlay
                target={target.current}
                show={message.show}
                placement="top"
              >
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    {message.content}
                  </Tooltip>
                )}
              </Overlay>
              <Button className="mr-2" type="button" variant="outline-danger">
                <HeartFill />
              </Button>
            </Card.Body>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default ProductScreen;

ProductScreen.propTypes = {
  product: PropTypes.object,
  match: PropTypes.object,
};
