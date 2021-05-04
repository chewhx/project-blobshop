import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const FormInput = ({ id, name, value, onChange, label, ...rest }) => {
  return (
    <>
      <Form.Group>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </Form.Group>
    </>
  );
};

export default FormInput;

FormInput.defaultProps = {};

FormInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func,
  label: PropTypes.string || PropTypes.bool,
};
