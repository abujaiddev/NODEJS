import React, { Component, useState } from "react";
import RightSidebar from "../sidebar/rightSidebar";
import { Link } from "react-router-dom";
import ProfileImg from "../../images/profile.jpg";
import { MdPublic, MdSchool, MdLocationOn } from "react-icons/md";
import "../profile/index.css";
import { IoIosHeartHalf, IoIosBriefcase } from "react-icons/io";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import axios from "axios";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/user/profile")
      .then(result => {
        this.setState({ userProfile: result.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2">lorem lorem lorem lorem</div>
          <div className="col-sm-8">
            <img
              src="https://scontent.fdel24-1.fna.fbcdn.net/v/t1.0-9/c0.181.960.355a/13938367_1107925602636648_9029723892961083323_n.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_ohc=u7_ED2RX2YoAX8Z_Xqc&_nc_ht=scontent.fdel24-1.fna&oh=40859da8bc38f221a621eb030b855e24&oe=5E7FF050"
              width="100%"
            />
            {this.state.userProfile.map(p => {
              const splitPath = p.userPhoto.split("\\");
              const path = splitPath[splitPath.length - 1];
              return (
                <img
                  src={`${window.location.origin}/${path}`}
                  className="userPhoto"
                />
              );
            })}
            {/* <input type="file" /> */}
            <span className="timeline-name"> Abu Jaid</span>
            <div className="cover-name">
              <Link to="#" className="cover-link">
                Update Info
              </Link>
              <Link to="#" className="cover-link">
                Activity Logs
              </Link>
            </div>
            <div className="h45">
              <ul className="timeline-menu">
                <li>
                  <a href="#">Timeline</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Friends</a>
                  <span className="fr-number"> 3,22</span>
                </li>
                <li>
                  <a href="#">Photos</a>
                </li>
                <li>
                  <a class="dropdown-toggle" href="#">
                    More
                  </a>
                </li>
              </ul>

              <div className="row mt-5">
                <div className="col-sm-5">
                  <div className="card h-85">
                    <div class="alert alert-dismissible fade show" role="alert">
                      <p>Add your family to your profile</p>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <div className="border-top">
                        <p>333 pending items</p>
                      </div>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <div className="border-bottom">
                      <MdPublic className="intro-icon" />
                      <span className="intro-title">Intro</span>
                    </div>
                    <div>
                      <IoIosBriefcase className="intro-icon" />
                      <span className="introl-title">
                        Education and Marketing at Own Business/Self Employed
                      </span>
                    </div>
                    <div>
                      <MdSchool className="intro-icon" />
                      Statudid Communication
                    </div>
                    <div>
                      <MdLocationOn className="intro-icon" />
                      <span> From Carnival</span>
                    </div>
                    <div>
                      <IoIosHeartHalf className="intro-icon" /> Maried to Larry
                    </div>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="public-post">
                    <span className="userimg">
                      <img
                        src="https://image.shutterstock.com/image-photo/side-profile-photo-young-handsome-260nw-654932254.jpg"
                        className="sm-prfofile"
                      />
                    </span>
                    <input
                      type="text"
                      className="in-height"
                      placeholder="What's on you mind?"
                    />
                    <div className="bt-padding">
                      <Dropdown
                        // isOpen={dropdownOpen}
                        // toggle={toggle}
                        className="dropdown-button"
                      >
                        <DropdownToggle
                          caret
                          color="light"
                          className="btn-dropme"
                        >
                          <MdPublic /> Public
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Some Action</DropdownItem>
                          <DropdownItem>Action </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                      <button className="btn btn-me">Post</button>
                    </div>
                  </div>
                  <div className="card mt-3">
                    <div className="sm-pro">
                      <img
                        src="https://image.shutterstock.com/image-photo/side-profile-photo-young-handsome-260nw-654932254.jpg"
                        className="sm-prfofile"
                      />
                      <span className="username">Faith Barned</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
