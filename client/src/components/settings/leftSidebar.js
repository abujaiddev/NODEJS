import React, { Component, Fragment } from "react";
import { MdSettings, MdNoEncryption } from "react-icons/md";

export default class leftSidebar extends Component {
  render() {
    return (
      <div className="border-right">
        <nav className="nav flex-column">
          <a className="nav-link active" href="#">
            <span className="setting-icon">
              <MdSettings />
            </span>
            Genral
          </a>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Security and login
          </a>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Your Facebook information
          </a>
          <div className="border-bottom"></div>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Timeline and tagging
          </a>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Stories
          </a>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Location
          </a>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            blocking
          </a>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Language and region
          </a>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Face recognition
          </a>
          <b className="border-bottom"></b>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Notifications
          </a>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Mobile
          </a>
          <a className="nav-link" href="#">
            <span className="setting-icon"></span>
            Public posts
          </a>
        </nav>
      </div>
    );
  }
}
