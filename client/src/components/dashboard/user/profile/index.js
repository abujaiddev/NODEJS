import React, { Component } from "react";
import { connect } from "react-redux";
import {
  profileUser,
  profileUpdate
} from "../../../store/actions/profileAction";
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
  }
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      phone: e.target.phone.value,
      bio: e.target.bio.value,
      work: e.target.work.value,
      education: e.target.education.value
    };
    this.props.profileUpdate(data);
    this.props.history.push("/dashboard/user");
  };
  // handaleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  componentDidMount() {
    this.props.profileUser();
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col sm="3">
              <LeftSidebar />
            </Col>
            <Col sm="6">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    defaultValue={this.props.profile.profile.username}
                    // onChange={this.handaleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    type="text"
                    name="phone"
                    defaultValue={this.props.profile.profile.phone}
                    // onChange={this.handaleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleText">About yourself</Label>
                  <Input
                    type="textarea"
                    name="bio"
                    defaultValue={this.props.profile.profile.bio}
                    placeholder="About yourself"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Work</Label>
                  <Input
                    type="textarea"
                    name="work"
                    defaultValue={this.props.profile.profile.work}
                    placeholder="Work"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Education</Label>
                  <Input
                    type="textarea"
                    name="education"
                    defaultValue={this.props.profile.profile.education}
                    placeholder="Education"
                  />
                </FormGroup>

                <Button type="submit">Submit</Button>
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

export default connect(mapStateToProps, { profileUser, profileUpdate })(
  Profile
);
