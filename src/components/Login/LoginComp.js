import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const LoginComp = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleLoginPress,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className="text-secondary text-center">Login</h2>
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
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>
              <Button
                type="submit"
                onClick={handleLoginPress}
                variant="outline-dark"
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <div>Forget Password?</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginComp;

LoginComp.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleLoginPress: PropTypes.func.isRequired,
};
