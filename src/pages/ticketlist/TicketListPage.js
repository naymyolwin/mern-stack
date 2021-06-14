import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BreadcrumbComp from "../../components/breadcrumb/BreadcrumbComp";
import Button from "react-bootstrap/Button";
import SearchFormComp from "../../components/searchform/SearchFormComp";
import TicketTableComp from "../../components/tickettable/TicketTableComp";
import tickets from "../../assets/data/dummyticket.json";

const TicketListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [dispTicket, setDispTicket] = useState(tickets);

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
    searchTicket(e.target.value);
  };
  const searchTicket = (str) => {
    const displayTickets = tickets.filter((ticket) =>
      ticket.subject.toLowerCase().includes(str.toLowerCase())
    );
    setDispTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="Ticket List" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="dark">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchFormComp
            handleOnChange={handleOnChange}
            searchValue={searchValue}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTableComp tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketListPage;
