import React from "react";
import { Label, Box, Text } from "gestalt";
const FormRange = ({ label, id, ...rest }) => {
  return (
    <>
      <Box paddingY={4}>
        <Label htmlFor={id}>
          <Text inline>{label}</Text>
        </Label>
        <input id={id} type="slider" {...rest} />
      </Box>
    </>
  );
};

export default FormRange;
