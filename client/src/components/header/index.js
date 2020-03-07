import React, { Fragment } from "react";
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
import {
  MdNotificationsNone,
  MdHelpOutline,
  MdNetworkCell
} from "react-icons/md";
import { connect } from "react-redux";
import { logout } from "../store/actions/authAction";
import { Link } from "react-router-dom";

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
        <Navbar color="primary" dark expand="md">
          <NavbarBrand tag={Link} to="/dashboard/user">
            <MdNetworkCell style={{ color: "#dc3545", fontSize: "20px" }} />{" "}
            Connect with me
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Input type="text" name="text" placeholder="Search.." />
              </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="#">
                  {isAuthenticated ? isAuthenticated.user.name : ""}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="#">
                  Create
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="#">
                  <MdNotificationsNone className="icon" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="#">
                  <MdHelpOutline className="icon" />
                </NavLink>
              </NavItem>
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
