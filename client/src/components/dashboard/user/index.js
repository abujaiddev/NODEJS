import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import LeftSidebar from "../../sidebar/leftSidebar";
import RightSidebar from "../../sidebar/rightSidebar";
import { Card, CardBody, CardText } from "reactstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm="3">
            <LeftSidebar />
          </Col>
          <Col sm="6" s>
            <Card>
              <CardBody>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                  veniam inventore incidunt vero soluta odit nesciunt placeat
                  esse nam dolorum, consequuntur numquam, quia consequatur.
                  Similique voluptates earum eaque dolorum commodi.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="3">
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    );
  }
}
