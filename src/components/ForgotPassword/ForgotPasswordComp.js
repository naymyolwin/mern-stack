import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ForgotPasswordComp = ({
  email,
  handleEmailChange,
  handleResetPress,
  handleFormSwitch,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className="text-secondary text-center">Reset Password</h2>
            <hr />
            <Form>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Button
                type="submit"
                onClick={handleResetPress}
                variant="outline-dark"
              >
                Reset Password
              </Button>
            </Form>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <a href="#!" onClick={handleFormSwitch}>
              Login Now
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPasswordComp;

ForgotPasswordComp.propTypes = {
  email: PropTypes.string.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handleResetPress: PropTypes.func.isRequired,
  handleFormSwitch: PropTypes.func.isRequired,
};
