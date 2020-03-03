import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    const { history } = this.props;

    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Home Page</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default withRouter(connect(mapStateToProps)(Home));
