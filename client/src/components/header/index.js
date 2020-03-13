import React, { Fragment } from "react";
import "./header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  NavLink
} from "reactstrap";
import { MdNotifications, MdHelp, MdSearch, MdPeople } from "react-icons/md";
import { connect } from "react-redux";
import { logout } from "../store/actions/authAction";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook-lite.png";
import userPhoto from "../../images/profile.jpg";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  logout = () => {
    this.props.logout();
    this.props.history.push("/login");
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Fragment>
        <Navbar dark expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <span className="l">
                <img src={facebook} className="logo" />
              </span>
              <NavItem>
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="header-search"
                />
                <button className="btn-search">
                  <MdSearch />
                </button>
              </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to={`/username/${
                    isAuthenticated ? isAuthenticated.user.name : ""
                    }`}
                >
                  <span className="c-username">
                    <img src={userPhoto} className="_30w" />
                    {isAuthenticated ? isAuthenticated.user.name : ""}
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/find-friends">
                  Find Friends
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/dummy">
                  Create
                </NavLink>
              </NavItem>
              <MdPeople className="icon" /><span className="notification">9</span>
              <MdNotifications className="icon" /><span className="notification">5</span>
              <MdHelp className="icon" />

              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret></DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={Link} to="/settings">
                      Settings
                    </DropdownItem>
                    <DropdownItem onClick={this.logout}>Log Out</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
    return (
      <Fragment>{this.props.auth.isAuthenticated ? authLinks : " "}</Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps, { logout })(Header);
