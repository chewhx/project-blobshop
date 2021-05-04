import React, { useContext, useState, useRef, useEffect } from "react";
import { Col, Card, Button, Row, Overlay, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
// Context
import { GlobalContext } from "../context/GlobalProvider";
import { CART_ADD_ITEM } from "../context/constants";
// Components, screens, pages
import FormCounter from "./FormCounter";
// Dev dependencies
import PropTypes from "prop-types";

const ProductCard = ({ product, inCart }) => {
  const target = useRef(null);
  const [message, setMessage] = useState({ show: false, content: "" });
  const { dispatchCart } = useContext(GlobalContext);
  const [qty, setQty] = useState((inCart && inCart.qty) || 1);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setMessage({ show: false, content: "" });
      }, 1000);
    };
  }, [message]);
  return (
    <>
      <Col lg={3} md={4} sm={6}>
        <Card className="mb-3">
          <Link to={`/products/${product._id}`}>
            <Card.Img
              as="div"
              style={{ backgroundColor: `#${product._id}`, height: "200px" }}
              variant="top"
              alt={product.name}
            />
          </Link>
          <Card.Body>
            <small className=" text-muted">{product.theme}</small>
            <Card.Title>
              <Link to={`/products/${product._id}`}>{product.name}</Link>
            </Card.Title>

            <Card.Text>${product.price}</Card.Text>
            {inCart ? (
              <>
                <Row>
                  <Col lg={6}>
                    <FormCounter size="sm" value={qty} onChange={setQty} />
                  </Col>
                  <Col lg={6}>
                    <Button
                      block
                      ref={target}
                      size="sm"
                      type="button"
                      variant="primary"
                      onClick={() => {
                        setMessage({ show: true, content: "Done" });
                        dispatchCart({
                          type: CART_ADD_ITEM,
                          payload: {
                            _id: product._id,
                            qty: qty,
                            mode: "default",
                            price: product.price,
                            subTotal: Number(product.price) * Number(qty),
                          },
                        });
                      }}
                    >
                      Update
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
                  </Col>
                </Row>
              </>
            ) : (
              <Button
                block
                type="button"
                variant="primary"
                onClick={() =>
                  dispatchCart({
                    type: CART_ADD_ITEM,
                    payload: {
                      _id: product._id,
                      qty: 1,
                      mode: "default",
                      price: product.price,
                      subTotal: Number(product.price),
                    },
                  })
                }
              >
                Add to cart
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
  inCart: PropTypes.object || PropTypes.bool,
};
