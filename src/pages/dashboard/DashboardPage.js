import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import TicketTableComp from "../../components/tickettable/TicketTableComp";
import tickets from "../../assets/data/dummyticket.json";
import BreadcrumbComp from "../../components/breadcrumb/BreadcrumbComp";

const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="secondary"
            style={{ "fontSize": "2rem", "padding": "10px 30px" }}
          >
            Add new Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total ticket : 58</div>
          <div>Pending ticket : 5</div>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-2">Recently added Tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTableComp tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
