import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="border-top border-dark">
      <Container className="bg-white pt-5">
        <Row>
          <Col md={4} className="mb-3">
            <h3>Contact us</h3>
            <p className="mt-3">
              234 Lorem ipsum, 4 dolor, sit amet consectetur adipisicing elit
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h3>Shipping details</h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              distinctio unde dicta impedit, explicabo error sunt, magnam
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h3>Our app</h3>
            <ul className="list-unstyled">
              <li>
                <Image
                  fluid
                  className="mb-2"
                  style={{ maxWidth: "150px" }}
                  src="/images/appstore.png"
                />
              </li>
              <li>
                <Image
                  fluid
                  className="mb-2"
                  style={{ maxWidth: "150px" }}
                  src="/images/playmarket.png"
                />
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-between">
          <Col md={8}>
            <p> © 2020 Company All rights reserved </p>
          </Col>
          <Col md={4} className="text-right">
            <p>Privacy & Cookies &nbsp; &nbsp; &nbsp; &nbsp; Accessibilty</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
