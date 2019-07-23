import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class NewContactForm extends Component {
  state = {

  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Hello, I'm the new contact form</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">


          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewContactForm;
