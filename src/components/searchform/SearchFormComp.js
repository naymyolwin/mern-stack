import React from "react";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchFormComp = ({ handleOnChange, searchValue }) => {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm={2}></Form.Label>
        <Col sm={9}>
          <Form.Control
            name="searchStr"
            onChange={handleOnChange}
            value={searchValue}
            placeholder="Search"
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SearchFormComp;

SearchFormComp.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};
