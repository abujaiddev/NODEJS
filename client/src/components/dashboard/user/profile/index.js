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
  Input
} from "reactstrap";
import RightSidebar from "../../../sidebar/rightSidebar";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.profile.profile.username,
      phone: this.props.profile.profile.phone
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handaleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    this.props.profileUser();
  }

  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     username: props
  //   };
  // }

  render() {
    console.log(this.state);

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
                    value={this.state.username}
                    onChange={this.handaleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handaleChange}
                  />
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
