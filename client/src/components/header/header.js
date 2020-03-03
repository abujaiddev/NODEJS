import React, { Fragment } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/authAction";
import Sidebar from "./sidebar";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  handleLogout = () => {
    this.props.logout();
    window.location.href = "/login";
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <Fragment>
        {isAuthenticated ? (
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                <Sidebar />
                <Button variant="contained" color="primary">
                  Hello World
                </Button>
              </div>
              <div className="col-sm-10">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                  ></div>
                  <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          <span>
                            <b>Welocme</b> {user.user.name}
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#"
                          onClick={this.handleLogout}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        ) : (
          <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
          </Fragment>
        )}
      </Fragment>
    );
  }
}
const mapStateTopProps = state => {
  return {
    auth: state.auth
  };
};
export default withRouter(connect(mapStateTopProps, { logout })(Header));
