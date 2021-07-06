import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Modal, Heading, Box, TextArea } from "gestalt";
const SvgModal = ({ text, size, svg }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        text={text || "</>"}
        size={size || "lg"}
        onClick={() => setShow(true)}
      />
      {show && (
        <Modal
          accessibilityModalLabel="modal-svg"
          onDismiss={() => setShow(false)}
          heading={
            <Box paddingY={5} paddingX={5}>
              <Heading align="center">Copy SVG</Heading>
            </Box>
          }
        >
          <Box paddingY={3} paddingX={5}>
            <TextArea
              id={`svg-code-${svg.current.id}`}
              value={svg?.current?.innerHTML}
              style={{ height: "20vh" }}
              rows={5}
              onChange={() => {}}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default SvgModal;
