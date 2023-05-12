import React from "react";
import Form from "react-bootstrap/Form";

import "./tag_input.css";

const TagInput = ({ value, handleChange }) => {
  return (
    <Form className="input-form">
      <Form.Group className="mb-3">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Enter a tag..."
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default TagInput;
