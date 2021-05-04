import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./ProductCardNew.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCardNew = ({ product }) => {
  return (
    <>
      <Col md={6}>
        <Card
          className="product-card py-4 px-4 mb-3"
          border="light"
          style={{ border: "none" }}
        >
          <Row>
            <Col xs={8}>
              <Link to={`/products/${product._id}`}>
                <Card.Title as="h3" className="text-capitalize">
                  {product.name}
                </Card.Title>
              </Link>
              <p>$4.00</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                laborum dolores ....
              </p>
            </Col>
            <Col xs={4}>
              <div id={`blob-${product._id}`}>
                <svg
                  width="150"
                  height="150"
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
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default ProductCardNew;

ProductCardNew.defaultProps = {
  product: {
    id: "007BFF",
    name: "Bootstrap Primary",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laborum dolores ....",
  },
};

ProductCardNew.propTypes = {
  product: PropTypes.object,
};
