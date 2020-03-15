import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import LeftSidebar from "../sidebar/leftSidebar";
import RightSidebar from "../sidebar/rightSidebar";
import { Card, CardBody, CardText } from "reactstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <Col sm="3">
            <LeftSidebar />
          </Col>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  quod itaque veniam quia cumque. Accusantium similique ducimus,
                  tempore officiis repellendus odit eaque recusandae minima
                  culpa ipsa neque? Iure, vel excepturi?
                </p>
              </div>
            </div>
          </div>
          <Col sm="3">
            <RightSidebar />
          </Col>
        </div>
      </div>
    );
  }
}
