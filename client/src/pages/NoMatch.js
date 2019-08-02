import React from "react";
import { Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";

let noMatchStyle = {
  marginTop: 90
}

function NoMatch() {
  return (
    <div>
      <Nav />
      <div style={noMatchStyle}>
        <Jumbotron>
          <Row>
            <Col size="md-12">
              <h1>404: Page Not Found</h1>
              <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  👻
              </span>
              </h1>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    </div>
  );
}

export default NoMatch;
