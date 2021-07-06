import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as blobs2 from "blobs/v2";
import generateColor from "../utils/generateColor";
import FormRange from "./Blobmaker/FormRange";
import FormColor from "./Blobmaker/FormColor";
import useDownloadSvg from "./useDownloadSvg";
import SvgModal from "./SvgModal";
import useIndexedDb from "./useIndexedDb";
import DownloadOptions from "./Blobmaker/DownloadOptions";
import IconPinLocal from "./Blobmaker/IconPinLocal";

import {
  Button,
  Flex,
  TextField,
  Label,
  Column,
  Box,
  IconButton,
} from "gestalt";

import useWindowSize from "./useWindowSize";

const Blobmaker = ({ initialValues }) => {
  const submitHandler = async (values) => {
    const res = await fetch(`http://localhost:3000/api/blobs`, {
      method: "POST",
      body: JSON.stringify(values),
    });
    console.log(res);
  };

  const svgRef = React.useRef(null);

  const { downloadSvg } = useDownloadSvg({ svgRef, fileName: "blobshop" });

  const { addItem } = useIndexedDb();

  const { width } = useWindowSize();

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ values, handleChange, handleSubmit, setFieldValue }) => {
          return (
            <Box display="flex" wrap column={12}>
              <Column span={12} mdSpan={6} justifyContent="center">
                <span ref={svgRef}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      style={{ transition: ".4s ease" }}
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
                </span>
              </Column>
              <Column span={12} mdSpan={6}>
                <Box padding={5}>
                  <Flex
                    gap={2}
                    wrap
                    justifyContent={width <= 576 ? "center" : "start"}
                  >
                    <DownloadOptions svg={svgRef} blob={values} />
                    <IconButton
                      accessibilityLabel="shuffle-svg"
                      icon="refresh"
                      size="lg"
                      onClick={() => {
                        const seed = Math.random();
                        const newSvgPath = blobs2.svgPath({
                          seed,
                          extraPoints: values.extraPoints,
                          randomness: values.randomness,
                          size: 256,
                        });
                        setFieldValue("seed", seed);
                        setFieldValue("svgPath", newSvgPath);
                        setFieldValue("fillColor", generateColor());
                      }}
                    />
                    <IconButton
                      accessibilityLabel="add-gallery-svg"
                      icon="view-type-default"
                      size="lg"
                      onClick={handleSubmit}
                    />
                    <IconPinLocal values={values} />
                  </Flex>
                  <Form.Group className="my-4">
                    <TextField
                      type="text"
                      id="name"
                      name="name"
                      label="Blob"
                      value={values.name}
                      onChange={({ value }) => setFieldValue("name", value)}
                    />
                  </Form.Group>
                  <FormRange
                    label="Points"
                    as="input"
                    type="range"
                    id="extraPoints"
                    name="extraPoints"
                    className="form-range"
                    min="0"
                    max="50"
                    step="1"
                    value={values.extraPoints}
                    onChange={handleChange}
                  />
                  <FormRange
                    label="Sharpness"
                    as="input"
                    type="range"
                    id="randomness"
                    name="randomness"
                    className="form-range"
                    min="0"
                    max="10"
                    step="1"
                    value={values.randomness}
                    onChange={handleChange}
                  />
                  <Row>
                    <Col xs={6}>
                      <Form.Label htmlFor="fillColor">Fill</Form.Label>
                      <FormColor
                        id="fillColor"
                        name="fillColor"
                        value={values.fillColor}
                        onChange={(color) => setFieldValue("fillColor", color)}
                        onClick={(color) => setFieldValue("fillColor", color)}
                        icon={
                          <i
                            className="bi bi-droplet-fill"
                            style={{ color: values.fillColor }}
                          ></i>
                        }
                      />
                    </Col>
                    <Col xs={6}>
                      <Form.Label htmlFor="strokeColor">Stroke</Form.Label>
                      <FormColor
                        id="strokeColor"
                        name="strokeColor"
                        value={values.strokeColor}
                        onChange={(color) =>
                          setFieldValue("strokeColor", color)
                        }
                        onClick={(color) => setFieldValue("strokeColor", color)}
                        icon={
                          <i
                            className="bi bi-brush-fill"
                            style={{ color: values.strokeColor }}
                          ></i>
                        }
                      />
                    </Col>
                  </Row>
                  <FormRange
                    label="Stroke Width"
                    as="input"
                    type="range"
                    id="strokeWidth"
                    name="strokeWidth"
                    className="form-range"
                    min="0"
                    max="50"
                    step="1"
                    value={values.strokeWidth}
                    onChange={handleChange}
                  />
                </Box>
              </Column>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default Blobmaker;
