import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Row, Col, Form } from "react-bootstrap";
import hexToRgba from "../../utils/hexToRgba";
import colorConvert from "color-convert";

import { Button, Popover, Box, Column, Label, Text } from "gestalt";
const FormColor = ({ value, onClick, onChange, icon, ...rest }) => {
  const [show, setShow] = useState(false);

  const anchorRef = React.useRef(null);

  const draculaTheme = [
    {
      name: "Background",
      hex: "#282a36",
    },
    {
      name: "Current Line",
      hex: "#44475a",
    },
    {
      name: "Selection",
      hex: "#44475a",
    },
    {
      name: "Foreground",
      hex: "#f8f8f2",
    },
    {
      name: "Comment",
      hex: "#6272a4",
    },
    {
      name: "Cyan",
      hex: "#8be9fd",
    },
    {
      name: "Green",
      hex: "#50fa7b",
    },
    {
      name: "Orange",
      hex: "#ffb86c",
    },
    {
      name: "Pink",
      hex: "#ff79c6",
    },
    {
      name: "Purple",
      hex: "#bd93f9",
    },
    {
      name: "Red",
      hex: "#ff5555",
    },
    {
      name: "Yellow",
      hex: "#f1fa8c",
    },
  ];

  const [r, g, b] = colorConvert.hex.rgb(value);

  return (
    <div style={{ position: "relative" }}>
      <Button
        ref={anchorRef}
        text={value.toUpperCase()}
        size="lg"
        onClick={() => setShow((prev) => !prev)}
      />
      {show && (
        <Popover
          anchor={anchorRef.current}
          idealDirection="down"
          onDismiss={() => setShow(false)}
          shouldFocus={false}
        >
          <Box>
            <HexColorPicker color={value} onChange={onChange} {...rest} />
            <Box width="200px" column={12}>
              <Column span={12}>
                <Form.Control
                  size="sm"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                />
              </Column>
            </Box>
            <Box display="flex" width="200px" wrap column={12}>
              <Column span={4}>
                <Label htmlFor="rgb-r">
                  <Text align="center">R</Text>
                </Label>
                <Form.Control
                  id="rgb-r"
                  size="sm"
                  style={{ width: "100%" }}
                  type="number"
                  min="0"
                  max="256"
                  value={colorConvert.hex.rgb(value)[0]}
                  onChange={(e) => {
                    onChange(
                      `#${colorConvert.rgb.hex(Number(e.target.value), g, b)}`
                    );
                  }}
                />
              </Column>
              <Column span={4}>
                <Label htmlFor="rgb-g">
                  <Text align="center">G</Text>
                </Label>
                <Form.Control
                  id="rgb-g"
                  size="sm"
                  style={{ width: "100%" }}
                  type="number"
                  min="0"
                  max="256"
                  value={g}
                  onChange={(e) => {
                    onChange(
                      `#${colorConvert.rgb.hex(r, Number(e.target.value), b)}`
                    );
                  }}
                />
              </Column>
              <Column span={4}>
                <Label htmlFor="rgb-b">
                  <Text align="center">B</Text>
                </Label>
                <Form.Control
                  id="rgb-b"
                  size="sm"
                  style={{ width: "100%" }}
                  type="number"
                  min="0"
                  max="256"
                  value={b}
                  onChange={(e) => {
                    onChange(
                      `#${colorConvert.rgb.hex(r, g, Number(e.target.value))}`
                    );
                  }}
                />
              </Column>
            </Box>
            <Row style={{ width: "200px" }} className="m-0 p-1">
              {draculaTheme.map((each, idx) => (
                <Col className="p-0" key={`dracula-${idx}`}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: each.hex || "#e3e3e3",
                      border: "1px solid #e3e3e3",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => onClick(each.hex)}
                  ></div>
                </Col>
              ))}
            </Row>
          </Box>
        </Popover>
      )}
      {/* {show && (
        <div style={{ position: "absolute" }} className="bg-white">
          <HexColorPicker color={value} onChange={onChange} {...rest} />
          <Row style={{ width: "200px" }} className="m-0 p-1">
            <Form.Control
              size="sm"
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />

            <Col xs={4} className="p-1 text-center">
              <Form.Label htmlFor="rgb-r">R</Form.Label>
              <Form.Control
                id="rgb-r"
                size="sm"
                style={{ width: "100%" }}
                type="number"
                min="0"
                max="256"
                value={colorConvert.hex.rgb(value)[0]}
                onChange={(e) => {
                  onChange(
                    `#${colorConvert.rgb.hex(Number(e.target.value), g, b)}`
                  );
                }}
              />
            </Col>
            <Col xs={4} className="p-1 text-center">
              <Form.Label htmlFor="rgb-g">G</Form.Label>
              <Form.Control
                id="rgb-g"
                size="sm"
                style={{ width: "100%" }}
                type="number"
                min="0"
                max="256"
                value={g}
                onChange={(e) => {
                  onChange(
                    `#${colorConvert.rgb.hex(r, Number(e.target.value), b)}`
                  );
                }}
              />
            </Col>
            <Col xs={4} className="p-1 text-center">
              <Form.Label htmlFor="rgb-b">B</Form.Label>
              <Form.Control
                id="rgb-b"
                size="sm"
                style={{ width: "100%" }}
                type="number"
                min="0"
                max="256"
                value={b}
                onChange={(e) => {
                  onChange(
                    `#${colorConvert.rgb.hex(r, g, Number(e.target.value))}`
                  );
                }}
              />
            </Col>
          </Row>
          <Row style={{ width: "200px" }} className="m-0 p-1">
            {draculaTheme.map((each, idx) => (
              <Col className="p-0" key={`dracula-${idx}`}>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: each.hex || "#e3e3e3",
                    border: "1px solid #e3e3e3",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => onClick(each.hex)}
                ></div>
              </Col>
            ))}
          </Row>
        </div>
      )} */}
    </div>
  );
};

export default FormColor;
