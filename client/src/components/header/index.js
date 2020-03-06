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
  Input
} from "reactstrap";
import { MdFace, MdNetworkCell } from "react-icons/md";
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
            <NavbarText>
              <strong>
                Welcome {isAuthenticated ? isAuthenticated.user.name : ""}
              </strong>
            </NavbarText>
          </Collapse>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <MdFace style={{ color: "#dc3545", fontSize: "20px" }} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/user/profile">
                  Profile
                </DropdownItem>
                <DropdownItem onClick={this.logout}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
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
