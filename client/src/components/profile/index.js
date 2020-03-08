import React, { Component } from "react";
import RightSidebar from "../sidebar/rightSidebar";
import { Link } from "react-router-dom";
import ProfileImg from "../../images/profile.jpg";

export default class UserProfile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <img
              src="https://scontent.fdel24-1.fna.fbcdn.net/v/t1.0-9/c0.181.960.355a/13938367_1107925602636648_9029723892961083323_n.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_ohc=u7_ED2RX2YoAX8Z_Xqc&_nc_ht=scontent.fdel24-1.fna&oh=40859da8bc38f221a621eb030b855e24&oe=5E7FF050"
              width="100%"
            />
            <img src={ProfileImg} className="user-profile" />
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
                  <a href="">Timeline</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Friends</a>
                </li>
                <li>
                  <a href="">Photos</a>
                </li>
              </ul>
            </div>
            <div className="card">
              <nav class="navbar">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">
                      Timeline
                    </a>
                    <a class="nav-item nav-link" href="#">
                      About
                    </a>
                    <a class="nav-item nav-link" href="#">
                      Friends
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <h4>Intro</h4>
                  </div>
                </div>
                <div
                  className="col-sm-8"
                  style={{ backgroundColor: "gray" }}
                ></div>
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
