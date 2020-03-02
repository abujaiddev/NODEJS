import React, { Component } from "react";
import { userLogin } from "../store/actions/authAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handaleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = { email, password };

    this.props.userLogin(data, this.props.history);
  };
  handleReset = e => {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard/UserDashboard");
    }
  }
  render() {
    // console.log(this.props);
    return (
      <div className="container-fluid h-100 ">
        <hr />
        <div className="row justify-content-center">
          <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <form action="" onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  className="form-control"
                  placeholder="Email"
                  onChange={this.handaleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  className="form-control"
                  placeholder="Password"
                  onChange={this.handaleChange}
                />
              </div>
              <div className="form-group">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <button
                        className="col-6 btn btn-secondary btn-sm float-left"
                        onClick={this.handleReset}
                      >
                        Reset
                      </button>
                    </div>
                    <div className="col">
                      <button className="col-6 btn btn-primary btn-sm float-right">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  //   console.log("==========", state);
  return {
    auth: state.auth
  };
};
export default withRouter(connect(mapStateToProps, { userLogin })(Login));
