import React from "react";
import PropTypes from "prop-types";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./AddTicketFormComp.module.css";

const AddTicketFormComp = ({
  subject,
  date,
  detail,
  handleSubjectChange,
  handleDateChange,
  handleDetailChange,
  handleSubmitPress,
}) => {
  return (
    <Jumbotron className={[classes.addnewticket]}>
      <h2 className="text-secondary text-center">Add New Ticket</h2>
      <hr />
      <br />
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col>
            <Form.Control
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={handleSubjectChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue found
          </Form.Label>
          <Col>
            <Form.Control
              name="date"
              type="date"
              placeholder="Date"
              required
              value={date}
              onChange={handleDateChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Detail
          </Form.Label>
          <Col>
            <Form.Control
              name="detail"
              as="textarea"
              value={detail}
              onChange={handleDetailChange}
            />
          </Col>
        </Form.Group>
        <Button type="submit" onClick={handleSubmitPress} block variant="dark">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default AddTicketFormComp;

AddTicketFormComp.propTypes = {
  subject: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  handleSubjectChange: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleDetailChange: PropTypes.func.isRequired,
  handleSubmitPress: PropTypes.func.isRequired,
};
