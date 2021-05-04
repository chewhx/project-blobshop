import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const FeatureSectionTile = ({ image, text }) => {
  return (
    <Col md={3} className="text-center">
      <Image
        roundedCircle
        className="mb-3"
        src={image || `https://via.placeholder.com/100/FFFFFF`}
      />
      <p className="text-white">{text || `Made fresh daily`}</p>
    </Col>
  );
};

FeatureSectionTile.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
};

const FeaturesSection = () => {
  return (
    <Container>
      <Row>
        <FeatureSectionTile text="Generated daily" />
        <FeatureSectionTile text="RGBA options" />
        <FeatureSectionTile text="Pixelated with care" />
        <FeatureSectionTile text="Browser and organic" />
      </Row>
    </Container>
  );
};

export default FeaturesSection;
