import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../store/actions/usersAction";
import { friendRequest } from "../store/actions/friendAction";
import "./users.css";
import profile from "../../images/profile.jpg";
import { MdPersonAdd, MdPeople } from "react-icons/md";
import LeftSidebar from "../sidebar/leftSidebar";

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  friendRequest = id => {
    // alert(id);
    this.props.friendRequest(id);
  };
  render() {
    const { users } = this.props.users;
    // console.log("=========", this.props);
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
                  <Link
                    to="#"
                    className="btn btn-light float-right"
                    onClick={() => this.friendRequest(user._id)}
                  >
                    <MdPersonAdd /> Add Friend ...
                  </Link>
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
    users: state.users,
    friendRequest: state.friendRequest
  };
};
export default connect(mapStateToProps, { getUsers, friendRequest })(users);
