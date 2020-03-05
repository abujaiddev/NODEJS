import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import LeftSidebar from "../../sidebar/leftSidebar";
import RightSidebar from "../../sidebar/rightSidebar";

export default class Dashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm="3">
            <LeftSidebar />
          </Col>
          <Col sm="6" style={{ backgroundColor: "green" }}>
            .col-auto - variable width content
          </Col>
          <Col sm="3">
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    );
  }
}
