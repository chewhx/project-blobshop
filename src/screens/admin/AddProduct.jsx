/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import generateColor from "../../utils/generateColor";
import getColorName from "../../utils/getColorName";
import generatePrice from "../../utils/generatePrice";
import { GlobalContext } from "../../context/GlobalProvider";
import { Formik } from "formik";
import { PRODUCTS_ADD_ITEM } from "../../context/constants";
import generateBlob from "../../utils/generateBlob";
import Input from "../../components/Input";

const AddProductScreen = () => {
  const { dispatchProducts } = useContext(GlobalContext);
  const [initialValues, setInitialValues] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    const newColor = generateColor();
    const { viewBox, transform, path } = generateBlob(newColor);
    setInitialValues({
      _id: newColor,
      name: getColorName.name(newColor)[1],
      price: generatePrice(),
      svg: {
        viewBox,
        transform,
        path,
      },
    });
  }, []);

  return !initialValues ? (
    "Loading"
  ) : (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        dispatchProducts({
          type: PRODUCTS_ADD_ITEM,
          payload: {
            ...values,
            theme: "User",
          },
        });
        setMessage("Blob added");
      }}
    >
      {(props) => (
        <Container>
          <Row>
            <Col md="6">
              <h2>{`${props.values.name}`}</h2>
              <h3>${`${props.values.price}`}</h3>
              <svg
                width="450"
                height="450"
                viewBox={props.values.svg.viewBox}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform={props.values.svg.transform}>
                  <path
                    stroke="none"
                    strokeWidth="0"
                    fill={`#${props.values._id}`}
                    d={props.values.svg.path}
                  />
                </g>
              </svg>
            </Col>
            <Col md={6}>
              <Row className="mb-5">
                <Button
                  type="button"
                  className="mr-3"
                  variant="primary"
                  onClick={() => {
                    setMessage("");
                    const newColor = generateColor();
                    props.setFieldValue("_id", newColor);
                    props.setFieldValue("name", getColorName.name(newColor)[1]);
                    props.setFieldValue("price", generatePrice());
                    const { viewBox, transform, path } = generateBlob(newColor);
                    props.setFieldValue("svg.viewBox", viewBox);
                    props.setFieldValue("svg.transform", transform);
                    props.setFieldValue("svg.path", path);
                  }}
                >
                  Random
                </Button>
                <Button
                  type="button"
                  variant="success"
                  onClick={() => props.handleSubmit()}
                >
                  Add
                </Button>
                {message && message}
              </Row>
              <Row>
                <Col md={6}>
                  <Input.Text
                    name="name"
                    id="name"
                    label="Blob name"
                    value={props.values.name}
                    onChange={props.handleChange}
                  />
                </Col>
                <Col md={6}>
                  <Input.Text
                    name="_id"
                    id="_id"
                    label="HEX Color Code"
                    value={props.values._id}
                    onChange={props.handleChange}
                  />
                </Col>
                <Col md={6}>
                  <Input.Text
                    name="price"
                    id="price"
                    label="Price"
                    value={props.values.price}
                    onChange={props.handleChange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export default AddProductScreen;
