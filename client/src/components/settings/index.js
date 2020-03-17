import React, { Component } from "react";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";
import "./settings.css";

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <LeftSidebar />
          </div>
          <div className="col-sm-8">
            <div className="st-wraper">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center st">
                  Name <span>Abu Jaid</span>
                  <span className="badge badge-primary badge-pill">Edit</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center st">
                  Username <span>zaid</span>
                  <span className="badge badge-primary badge-pill">Edit</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center st">
                  Contact <span>12345</span>
                  <span className="badge badge-primary badge-pill">Edit</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center st">
                  Manage account <span>12345</span>
                  <span className="badge badge-primary badge-pill">Edit</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center st">
                  Identity confirmation <span className="st-info">12345</span>
                  <span className="badge badge-primary badge-pill">Edit</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-1">
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}
