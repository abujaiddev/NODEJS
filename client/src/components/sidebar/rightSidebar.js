import React, { Component, Fragment } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

export default class RightSidebar extends Component {
  render() {
    return (
      <Fragment>
        <Card>
          <CardBody>
            <CardHeader>Your Pages</CardHeader>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            repudiandae aliquam alias distinctio optio ratione, quod tempora
            excepturi magnam autem quia reprehenderit error harum modi, quae id
            dolor deleniti iure?
          </CardBody>
        </Card>
        <br />
        <Card>
          <CardBody>
            <CardHeader>Contacts</CardHeader>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            repudiandae aliquam alias distinctio optio ratione, quod tempora
            excepturi magnam autem quia reprehenderit error harum modi, quae id
            dolor deleniti iure?
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
