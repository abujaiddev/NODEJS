import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/authAction";

class Header extends React.Component {
  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <Fragment>
        {isAuthenticated ? (
          <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="#">
                Navbar
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav ml-auto">
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
          </Fragment>
        ) : (
          <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="#">
                Navbar
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/author/55">
                      Author
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
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
