import React from "react";
import { Formik } from "formik";
import * as blobs2 from "blobs/v2";
import generateColor from "../../utils/generateColor";
import FormRange from "./FormRange";
import FormColor from "./FormColor";
import DownloadOptions from "./DownloadOptions";
import IconPinLocal from "./IconPinLocal";
import {
  Tooltip,
  Flex,
  TextField,
  Label,
  Text,
  Column,
  Box,
  IconButton,
} from "gestalt";
import useWindowSize from "../../hooks/useWindowSize";

const Blobmaker = ({ initialValues }) => {
  const submitHandler = async (values) => {
    const res = await fetch(`/api/blobs`, {
      method: "POST",
      body: JSON.stringify(values),
    });
    console.log(res);
  };

  const svgRef = React.useRef(null);

  const { width } = useWindowSize();

  return (
    <>
      <Formik
        initialValues={{ ...initialValues, lockColor: false }}
        onSubmit={submitHandler}
      >
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
                  <Box
                    display="flex"
                    paddingY={6}
                    wrap
                    justifyContent={width <= 576 ? "around" : "end"}
                  >
                    <Tooltip text="Download">
                      <DownloadOptions svg={svgRef} blob={values} />
                    </Tooltip>
                    <Tooltip text="Shuffle">
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
                          !values.lockColor &&
                            setFieldValue("fillColor", generateColor());
                        }}
                      />
                    </Tooltip>
                    <Tooltip text="Post">
                      <IconButton
                        accessibilityLabel="add-gallery-svg"
                        icon="view-type-default"
                        size="lg"
                        onClick={handleSubmit}
                      />
                    </Tooltip>
                    <Tooltip text="Pin">
                      <IconPinLocal values={values} />
                    </Tooltip>
                  </Box>
                  <Box paddingY={4}>
                    <TextField
                      type="text"
                      id="name"
                      name="name"
                      label="Blob"
                      width="100%"
                      value={values.name}
                      onChange={({ value }) => setFieldValue("name", value)}
                    />
                  </Box>
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
                  <Box display="flex" wrap column={12}>
                    <Column span={6}>
                      <Label htmlFor="fillColor">
                        <Text inline>Fill</Text>
                      </Label>
                      <Flex>
                        <FormColor
                          id="fillColor"
                          name="fillColor"
                          value={values.fillColor}
                          onChange={(color) =>
                            setFieldValue("fillColor", color)
                          }
                          onClick={(color) => setFieldValue("fillColor", color)}
                          icon={
                            <i
                              className="bi bi-droplet-fill"
                              style={{ color: values.fillColor }}
                            ></i>
                          }
                        />
                        <IconButton
                          accessibilityLabel="lock-color-svg"
                          iconColor={values.lockColor ? "red" : "gray"}
                          onClick={() =>
                            setFieldValue("lockColor", !values.lockColor)
                          }
                          icon="lock"
                        />
                      </Flex>
                    </Column>
                    <Column span={6}>
                      <Label htmlFor="strokeColor">
                        <Text>Stroke</Text>
                      </Label>
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
                    </Column>
                  </Box>
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
