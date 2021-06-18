import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UpdateTicketComp = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text>Please reply here</Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={msg}
        onChange={handleOnChange}
      />
      <div className="text-right mt-2 mb-2">
        <Button variant="dark" type="submit">
          Reply
        </Button>
      </div>
    </Form>
  );
};

export default UpdateTicketComp;

UpdateTicketComp.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};
