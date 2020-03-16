import React, { useEffect, useState } from "react";
import "./user.css";
import { useParams, Link } from "react-router-dom";
import { MdPersonAdd, MdMessage, MdPublic } from "react-icons/md";

import { connect } from "react-redux";
import axios from "axios";
import ProfileSidebar from "../sidebar/profileSidebar";

export default function User(props) {
  let { id } = useParams();
  const [userProfile, setUserProfile] = useState(0);
  const [userAddress, setUserAddress] = useState(0);
  useEffect(() => {
    axios
      .get(`/api/friend/${id}`)
      .then(result => {
        // console.log("++++++++++++++++++", result.data);
        setUserProfile(result.data);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`/api/userAddress`)
      .then(result => {
        console.log(result.data);
        setUserAddress(result.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10">
          <div className="card cover">
            <img
              src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/c0.161.851.315a/p851x315/83756229_102420014664822_5528436827729428480_o.jpg?_nc_cat=100&_nc_sid=dd9801&_nc_ohc=sIzbSsGzMZgAX_JeDdk&_nc_ht=scontent-frx5-1.xx&oh=ff9c76f6284dd4f6887b7844db426aa0&oe=5E8E23B8"
              className="coverPhotoImg"
            />
            <a href="#">
              <img
                src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c1.0.160.160a/p160x160/84606449_113259690247521_5394564071502643200_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=lkAkjaWFIvIAX97cBsc&_nc_ht=scontent-frx5-1.xx&oh=b96814918106d9270f7ce85a334af357&oe=5E8FDBAC"
                className="user-c"
              />
            </a>
            <Link to="#" className="username">
              {userProfile.username}
            </Link>
            <div className="btn-add">
              <Link to="#" className="add-f">
                <MdMessage /> Message
              </Link>
              <Link to="#" className="add-f">
                <MdPersonAdd /> Add Friend
              </Link>
            </div>
          </div>

          <div className="card _40h">
            <div className="card-body">
              <ul className="timeline">
                <li></li>
                <li>
                  <Link to="#">Timeline</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Friends</Link>
                </li>
                <li>
                  <Link to="#">Photo</Link>
                </li>
                <li>More</li>
              </ul>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header">DO YOU KNOW TOM?</div>
            <div className="card-body _60h">
              <p>
                To see what he shares with friends,{" "}
                <Link to="#">send him a friend request.</Link>
              </p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-5">
              <ProfileSidebar />
            </div>
            <div className="col-7">
              <div className="card">
                <div className="card-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, asperiores dolores veritatis quae quod praesentium
                  eligendi dignissimos laudantium voluptas laboriosam odio ipsum
                  ea nisi, necessitatibus veniam earum, nobis exercitationem! A!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {};
// };
// export default connect(mapStateToProps)(User);
