import React, { useContext } from "react";
import { Navbar, Nav, Badge, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";

const Header = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <>
      <Navbar
        expand="md"
        sticky="top"
        bg="white"
        variant="light"
        className="py-4 bg-white"
      >
        <Container>
          <Navbar.Brand href="/">BLOBSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <LinkContainer to={`/products`}>
                <Nav.Link>Shop All</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/add`}>
                <Nav.Link>Create</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/edit`}>
                <Nav.Link>Delete</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  Cart{" "}
                  <span>
                    {cart && (
                      <span className="h4">
                        <Badge variant="success">
                          {Object.keys(cart.items).length}
                        </Badge>
                      </span>
                    )}
                  </span>
                  <span className="h5">
                    {" "}
                    ${cart.prices.subTotal.toFixed(2)}
                  </span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
