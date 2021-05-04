import React from "react";
import { getNames } from "country-list";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

import _states from "../data/_states.json";

const Input = () => {
  return <div>Input</div>;
};

Input.Text = function InputText({ label, ...rest }) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...rest} />
    </Form.Group>
  );
};

Input.SelectCountry = function InputSelectCountry({ label, ...rest }) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control as="select" {...rest}>
        <option value="" label="Choose..." />
        {getNames().map((name, idx) => (
          <option key={`country-option-${idx}`} values={name} label={name} />
        ))}
      </Form.Control>
    </Form.Group>
  );
};

Input.SelectState = function InputSelectState({ label, ...rest }) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control as="select" {...rest}>
        <option value="" label="Choose..." />
        {_states.map((name, idx) => (
          <option key={`states-option-${idx}`} values={name} label={name} />
        ))}
      </Form.Control>
    </Form.Group>
  );
};

Input.Check = function InputCheck({ label, ...rest }) {
  return (
    <Form.Group>
      <Form.Check label={label} {...rest} />
    </Form.Group>
  );
};

Input.Radio = function InputRadio({ label, ...rest }) {
  return (
    <Form.Group>
      {label.map((each, idx) => (
        <Form.Check
          key={`option-${each}-${idx}`}
          type="radio"
          label={each}
          value={each}
          {...rest}
        />
      ))}
    </Form.Group>
  );
};

export default Input;

Input.propTypes = {
  value: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func,
};

const labelValidation = {
  label: PropTypes.string,
};

Input.Text.propTypes = labelValidation;
Input.Check.propTypes = labelValidation;
Input.SelectCountry.propTypes = labelValidation;
Input.SelectState.propTypes = labelValidation;
Input.Radio.propTypes = {
  label: PropTypes.array,
};
