import Head from "next/head";
import Layout from "../components/Layout";
import * as blobs2 from "blobs/v2";
import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Formik } from "formik";
import getColorName from "../utils/getColorName";

export default function Home() {
  const initialValues = () => {
    const blobSvgPath = blobs2.svgPath({
      seed: Math.random(),
      extraPoints: 10,
      randomness: 5,
      size: 256,
    });
    return {
      seed: Math.random(),
      strokeColor: "#000000",
      strokeWidth: 0,
      fillColor: "#5cb85c",
      randomness: 5,
      extraPoints: 10,
      svgPath: blobSvgPath,
    };
  };

  return (
    <Layout>
      <Head>
        <title>Blobshop</title>
      </Head>
      <Formik
        enableReinitialize
        initialValues={initialValues()}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => {
          return (
            <Container>
              <h1>{getColorName.name(values.fillColor)[1]}</h1>
              <Row>
                <Col xs={12} md={6}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke={values.strokeColor}
                      strokeWidth={values.strokeWidth}
                      fill={values.fillColor}
                      d={blobs2.svgPath({
                        seed: values.seed,
                        extraPoints: values.extraPoints,
                        randomness: values.randomness,
                        size: 256,
                      })}
                    />
                  </svg>
                </Col>
                <Col xs={12} md={6}>
                  <Button onClick={() => setFieldValue("seed", Math.random())}>
                    Random
                  </Button>
                  <Button variant="dark" onClick={handleSubmit}>
                    Save
                  </Button>
                  <Form>
                    <input
                      hidden
                      id="seed"
                      name="seed"
                      value={values.seed}
                      onChange={handleChange}
                    />
                    <div className="my-4">
                      <Form.Label htmlFor="extraPoints">Points</Form.Label>
                      <Form.Control
                        id="extraPoints"
                        name="extraPoints"
                        type="range"
                        className="form-range"
                        min="0"
                        max="50"
                        step="1"
                        value={values.extraPoints}
                        onChange={(e) => {
                          setFieldValue("extraPoints", Number(e.target.value));
                          setFieldValue("seed", Number(Math.random()));
                        }}
                      />
                    </div>
                    <div className="my-4">
                      <Form.Label htmlFor="fillColor">Fill Color</Form.Label>
                      <Form.Control
                        id="fillColor"
                        name="fillColor"
                        type="color"
                        style={{ height: "100px", width: "150px" }}
                        value={values.fillColor}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4">
                      <Form.Label htmlFor="randomness">Sharpness</Form.Label>
                      <Form.Control
                        id="randomness"
                        name="randomness"
                        type="range"
                        className="form-range"
                        min="0"
                        max="10"
                        step="1"
                        value={values.randomness}
                        onChange={(e) => {
                          setFieldValue("randomness", Number(e.target.value));
                          setFieldValue("seed", Number(Math.random()));
                        }}
                      />
                    </div>
                    <div className="my-4">
                      <Form.Label htmlFor="strokeColor">
                        Stroke Color
                      </Form.Label>
                      <Form.Control
                        id="strokeColor"
                        name="strokeColor"
                        type="color"
                        style={{ height: "100px", width: "150px" }}
                        value={values.strokeColor}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="my-4">
                      <Form.Label htmlFor="strokeWidth">
                        Stroke Width
                      </Form.Label>
                      <Form.Control
                        id="strokeWidth"
                        name="strokeWidth"
                        type="range"
                        className="form-range"
                        min="0"
                        max="50"
                        step="1"
                        value={values.strokeWidth}
                        onChange={handleChange}
                      />
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          );
        }}
      </Formik>
    </Layout>
  );
}
