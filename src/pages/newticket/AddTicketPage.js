import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BreadcrumbComp from "../../components/breadcrumb/BreadcrumbComp";
import AddTicketFormComp from "../../components/addticketform/AddTicketFormComp";

const AddTicketPage = () => {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  const handleSubmitPress = (e) => {
    e.preventDefault();

    console.log(subject);
    console.log(date);
    console.log(detail);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComp page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketFormComp
            subject={subject}
            date={date}
            detail={detail}
            handleSubjectChange={handleSubjectChange}
            handleDateChange={handleDateChange}
            handleDetailChange={handleDetailChange}
            handleSubmitPress={handleSubmitPress}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicketPage;
