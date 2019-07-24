import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import AddNewContact from "../components/AddNewContact";

class NewContactForm extends Component {
  state = {

  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <AddNewContact />
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
