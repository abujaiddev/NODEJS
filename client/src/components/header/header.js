import React, { Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { MdFace } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/authAction";

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
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand to="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem></NavItem>
            </Nav>
            <NavbarText>
              <strong>
                Welcome {isAuthenticated ? isAuthenticated.user.name : ""}
              </strong>
            </NavbarText>
          </Collapse>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <MdFace style={{ color: "#dc3545", fontSize: "20px" }} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem onClick={this.logout}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
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
