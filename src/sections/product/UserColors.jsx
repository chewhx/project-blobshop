import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import ProductCardNew from "../../components/ProductCardNew";
import { GlobalContext } from "../../context/GlobalProvider";

const UserColors = () => {
  const { products } = useContext(GlobalContext);
  return (
    <>
      <Row>
        {Object.keys(products)
          .map((key) => products[key])
          .filter((each) => each.theme === "User")
          .map((each, idx) => (
            <ProductCardNew key={`bootstrap-product-${idx}`} product={each} />
          ))}
      </Row>
    </>
  );
};

export default UserColors;
