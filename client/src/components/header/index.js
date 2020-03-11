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
  MdNotifications,
  MdHelp,
  MdNetworkCell,
  MdPeople
} from "react-icons/md";
import { connect } from "react-redux";
import { logout } from "../store/actions/authAction";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook-lite.png";

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
        <Navbar className="bg-fb" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            <img src={facebook} className="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Input
                  type="text"
                  name="text"
                  placeholder="Search Facebook"
                  className="in-search"
                />
              </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to={`/${isAuthenticated ? isAuthenticated.user.name : ""}`}
                >
                  {isAuthenticated ? isAuthenticated.user.name : ""}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="#">
                  Create
                </NavLink>
              </NavItem>
              <MdPeople className="icon" />
              <MdNotifications className="icon" />
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
