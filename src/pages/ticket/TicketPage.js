import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import BreadcrumbComp from "../../components/breadcrumb/BreadcrumbComp";
import tickets from "../../assets/data/dummyticket.json";
import MessageHistoryComp from "../../components/messagehistory/MessageHistoryComp";
import UpdateTicketComp from "../../components/updateticket/UpdateTicketComp";

const TicketPage = () => {
  const ticket = tickets[0];

  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject : {ticket.subject}</div>
          <div className="date">Date : {ticket.addedAt}</div>
          <div className="status">Status : {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-dark">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistoryComp msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicketComp
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
