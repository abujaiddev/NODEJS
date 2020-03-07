import React, { Component } from "react";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <LeftSidebar />
          </div>
          <div className="col-sm-6">
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Name <span>Abu Jaid</span>
                <span class="badge badge-primary badge-pill">Edit</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Username <span>zaid</span>
                <span class="badge badge-primary badge-pill">Edit</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Contact <span>12345</span>
                <span class="badge badge-primary badge-pill">Edit</span>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    );
  }
}
