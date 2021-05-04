import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import ProductCardNew from "../../components/ProductCardNew";
import { GlobalContext } from "../../context/GlobalProvider";

const AppleColorsSection = () => {
  const { products } = useContext(GlobalContext);
  return (
    <>
      <Row>
        {Object.keys(products)
          .map((key) => products[key])
          .filter((each) => each.theme === "Apple UI")
          .map((each, idx) => (
            <ProductCardNew key={`appleui-product-${idx}`} product={each} />
          ))}
      </Row>
    </>
  );
};

export default AppleColorsSection;
