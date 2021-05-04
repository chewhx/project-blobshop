import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const FeatureCard = ({ reverse }) => {
  return (
    <Container className="py-4">
      <Row>
        <Col md={6} className={reverse && `order-md-1`}>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            height="400px"
          >
            <path
              fill="#FFFFFF"
              d="M53.3,-65.4C64.3,-54.4,64.9,-33,66.8,-13.1C68.7,6.8,71.9,25.1,65.9,40.5C59.9,55.9,44.7,68.4,27,75.5C9.2,82.5,-11,84.1,-26.4,76.7C-41.9,69.3,-52.6,52.9,-62.8,36C-72.9,19,-82.5,1.4,-78.8,-12.9C-75.1,-27.1,-58,-38,-42.7,-48.2C-27.3,-58.5,-13.7,-68.1,3.8,-72.6C21.2,-77.1,42.4,-76.5,53.3,-65.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </Col>
        <Col md={6}>
          <div className="mx-auto  text-white">
            <p className="display-3">Color splash</p>
            <p>
              Browse our assortment of meats, baked goods and top shelf products
              you’ll reach for regularly.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatureCard;

FeatureCard.propTypes = {
  reverse: PropTypes.bool,
};
