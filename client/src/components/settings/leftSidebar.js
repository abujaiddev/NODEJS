import React, { Component, Fragment } from "react";
import {
  MdSettings,
  MdSecurity,
  MdTimeline,
  MdLocationOn,
  MdBlock,
  MdPersonOutline,
  MdPhonelinkRing,
  MdPublic
} from "react-icons/md";
import {
  FaExpeditedssl,
  FaFacebookF,
  FaBookOpen,
  FaLanguage,
  FaWifi
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default class leftSidebar extends Component {
  render() {
    return (
      <div className="border-right">
        <nav className="nav flex-column">
          <Link className="nav-link s-link active" to="#">
            <span className="setting-icon">
              <MdSettings />
            </span>
            <span>Genral</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <MdSecurity />
            </span>
            <span className="linkWrap">Security and login</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <FaFacebookF />
            </span>
            <span className="linkWrap">Your Facebook information</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <FaExpeditedssl className="location" />
            </span>
            <span className="linkWrap">Privacy</span>
          </Link>
          <div className="border-bottom"></div>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <MdTimeline />
            </span>
            <span className="linkWrap"> Timeline and tagging</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <FaBookOpen />
            </span>
            <span className="linkWrap"> Stories</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <MdLocationOn className="location" />
            </span>
            <span className="linkWrap">Location</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <MdBlock className="blocking" />
            </span>
            <span className="linkWrap">blocking</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <FaLanguage className="same" />
            </span>
            <span className="linkWrap"> Language and region</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <MdPersonOutline className="same" />
            </span>
            <span className="linkWrap">Face recognition</span>
          </Link>
          <b className="border-bottom"></b>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <MdPublic className="same" />
            </span>
            <span className="linkWrap">Notifications</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <MdPhonelinkRing className="same" />
            </span>
            <span className="linkWrap">Mobile</span>
          </Link>
          <Link className="nav-link s-link" to="#">
            <span className="setting-icon">
              <FaWifi className="same" />
            </span>
            <span className="linkWrap">Public posts</span>
          </Link>
        </nav>
      </div>
    );
  }
}
