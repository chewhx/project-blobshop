import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";

// Sections
import Hero from "../sections/home/Hero";
import Highlight from "../sections/home/Highlight";
import Features from "../sections/home/Features";
import Giftcard from "../sections/home/Giftcard";
import AllColors from "../sections/product/AllColors";

const ProductListing = () => {
  const { products } = useContext(GlobalContext);

  return !products ? (
    "Loading..."
  ) : (
    <>
      <Hero />
      <Container>
        <AllColors />
      </Container>
      <Container fluid className="bg-success">
        <Highlight />
      </Container>
      <Container>
        <AllColors />
      </Container>
      <Container fluid className="bg-dark py-5">
        <Features />
      </Container>
      <Container className="my-5">
        <Giftcard />
      </Container>
      <Container fluid className="bg-info">
        <Highlight reverse />
      </Container>
    </>
  );
};

export default ProductListing;
