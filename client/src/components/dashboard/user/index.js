import React, { Component } from "react";
import { fluid, Container, Row, Col } from "reactstrap";
import Sidebar from "../../sidebar";

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="3">
            <Sidebar />
          </Col>
          <Col sm="6" style={{ backgroundColor: "green" }}>
            .col-auto - variable width content
          </Col>
          <Col sm="3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            doloremque vitae sequi quos necessitatibus, fugit nesciunt unde
            numquam temporibus explicabo modi neque quisquam repudiandae ad,
            odit possimus odio? Consectetur, libero.
          </Col>
        </Row>
      </Container>
    );
  }
}
