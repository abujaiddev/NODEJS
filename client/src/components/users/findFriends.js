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

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card _692w mt-3 mb-3">
              <div className="card-body">
                <h2 className="_34e"> No New Friend Requests</h2>
                <a href="#">View sent requests</a>
              </div>
            </div>
            <div className="card _692w">
              <div className="card-body">
                <h6>People you may know</h6>
              </div>
            </div>
            {users.map(user => (
              <div className="card _692w" key={user._id}>
                <div className="card-body">
                  <img className="friends-img" src={profile} />
                  <Link to={`user/${user._id}`} className="friend-title">
                    {user.username}
                  </Link>
                  <Link to="#" className="btn-friend-d float-right">
                    Remove
                  </Link>{" "}
                  <Link
                    to="#"
                    className="btn-friend float-right"
                    onClick={() => this.friendRequest(user._id)}
                  >
                    <MdPersonAdd /> Add Friend
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
