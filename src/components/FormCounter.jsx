import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const FormCounter = ({
  max,
  label,
  className,
  value,
  size,
  onChange: handleChange,
}) => {
  return (
    <>
      <Form.Group className={className}>
        {label && <Form.Label>{label}</Form.Label>}
        <InputGroup>
          <InputGroup.Prepend>
            <Button
              size={size}
              variant="link"
              onClick={() => {
                if (value === 1) return;
                if (value > 1) handleChange((prev) => Number(prev) - 1);
              }}
            >
              -
            </Button>
          </InputGroup.Prepend>
          <Form.Control
            type="number"
            value={value}
            size={size}
            onChange={(e) => handleChange(e.target.value)}
          />
          <InputGroup.Append>
            <Button
              size={size}
              variant="link"
              onClick={() => {
                if (value === max) return;
                if (value < max) handleChange((prev) => Number(prev) + 1);
              }}
            >
              +
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </>
  );
};

export default FormCounter;

FormCounter.propTypes = {
  max: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  size: PropTypes.string,
};

FormCounter.defaultProps = {
  max: 999,
  size: "md",
};
