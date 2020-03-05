import React, { Component } from "react";
import { connect } from "react-redux";
import { profileUser } from "../../../store/actions/profileAction";
import LeftSidebar from "../../../sidebar/leftSidebar";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import RightSidebar from "../../../sidebar/rightSidebar";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: []
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handaleChange = e => {};
  componentDidMount() {
    this.props.profileUser();
  }
  static getDerivedStateFromProps(props, state) {
    return {
      profile: props.profile.profile
    };
  }
  render() {
    console.log(this.state.profile);
    const { work, username, phone } = this.state.profile;
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col sm="3">
              <LeftSidebar />
            </Col>
            <Col sm="6">
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input type="text" name="phone" />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleText">About yourself</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <Button>Submit</Button>
              </Form>
            </Col>
            <Col sm="3">
              <RightSidebar />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(mapStateToProps, { profileUser })(Profile);
