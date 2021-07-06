import React from "react";
import { Form } from "react-bootstrap";
import { Label, Box } from "gestalt";
const FormRange = ({ label, ...rest }) => {
  return (
    <>
      <Box paddingY={4}>
        <Label htmlFor="extraPoints">{label}</Label>
        <Form.Control {...rest} />
      </Box>
    </>
  );
};

export default FormRange;
