import React, { useEffect, useState } from "react";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";
import "./settings.css";
import { Link, useParams, useLocation } from "react-router-dom";

export default function Settings(props) {
  let location = useLocation();
  const query = new URLSearchParams(location.search);
  const section = query.get("section");
  const [username, setUsername] = useState(false);
  const toggleSetting = () => {
    setUsername(!username);
  };

  console.log(query.get("section"));
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3 mt-4 w-220">
          <LeftSidebar />
        </div>
        <div className="col-sm-8">
          <div className="st-wraper">
            <ul className="setting-group mt-4">
              <h6 className="pl-3">General Account Settings</h6>
              <hr />
              <li className="st">
                <Link to="#">
                  <span className="float-left"> Name</span>
                  <span className="setting-c">Abu Jaid</span>
                  <span className="float-right">Edit</span>
                </Link>
              </li>
              <hr />
              <li className="st">
                {!username && (
                  <Link to="#" onClick={toggleSetting}>
                    <span className="float-left">Username</span>
                    <span className="setting-c">Abu Jaid</span>
                    <span className="float-right">Edit</span>
                  </Link>
                )}
                {username && (
                  <div className="username-wrapper">
                    <p>
                      Your public username is the same as your timeline address:
                    </p>
                    <input type="text" className="" />
                    <br />
                    <p className="mt-3">
                      Note: Your username should include your authentic name.[?]
                    </p>
                    <button className="btn btn-primary">Save Changes</button>{" "}
                    <button className="btn btn-light" onClick={toggleSetting}>
                      Cancel
                    </button>
                  </div>
                )}
              </li>
              <hr />
              <li className="st">
                <Link to="#">
                  <span className="float-left"> Contact</span>
                  <span className="setting-c">Abu Jaid</span>
                  <span className="float-right">Edit</span>
                </Link>
              </li>
              <hr />
              <li className="st">
                <Link to="#">
                  <span className="float-left">Manage Account</span>
                  <span className="setting-c">Abu Jaid</span>
                  <span className="float-right">Edit</span>
                </Link>
              </li>
              <hr />
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
