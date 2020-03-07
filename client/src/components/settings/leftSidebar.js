import React, { Component, Fragment } from "react";
import { MdSettings, MdNoEncryption } from "react-icons/md";

export default class leftSidebar extends Component {
  render() {
    return (
      <div className="border-right text-center">
        <nav class="nav flex-column">
          <a class="nav-link active" href="#">
            <span className="setting-icon">
              <MdSettings />
            </span>
            Genral
          </a>
          <a class="nav-link" href="#">
            <span className="setting-icon">
              <MdNoEncryption />
            </span>
            Privacy
          </a>
        </nav>
      </div>
    );
  }
}
