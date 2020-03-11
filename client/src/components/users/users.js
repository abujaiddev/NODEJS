import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/usersAction";
import "./users.css";
import profile from "../../images/profile.jpg";
import { MdPersonAdd, MdPeople } from "react-icons/md";
import LeftSidebar from "../sidebar/leftSidebar";

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props.users;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <LeftSidebar />
          </div>
          <div className="col-sm-6">
            {users.map(user => (
              <div className="card">
                <div className="card-body">
                  <img className="friends-img" src={profile} />
                  <span className="friend-title">{user.username}</span>
                  <a href="#" className="btn btn-light float-right">
                    <MdPersonAdd /> Add Friend ...
                  </a>
                  <div className="card-text">
                    <div className="friends-short">
                      <strong>Lives in Mumbai Maharashtra</strong>
                      <br />
                      <span>Lorem ipsum dolor sit amet consectetur,</span>
                      <br />
                      <MdPeople />
                      15 mutula friends including Zaid
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-3">col-3</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps, { getUsers })(users);
