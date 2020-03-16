import React from "react";
import "./user.css";
import { MdPeople } from "react-icons/md";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-sm-3 text-center">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-9">
                <ul className="nav flex-column float-left">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Active
                    </a>
                  </li>
                  <li className="nav-item ls">
                    <MdPeople />
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item ls">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item ls">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="card-header">Create Post</div>
                  <div className="card-body">
                    <textarea
                      name=""
                      className="form-control"
                      rows="2"
                    ></textarea>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">
                    <span className="">Stories</span>
                    <a href="#" className="float-right">
                      See All
                    </a>
                  </div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis eaque ut facere, numquam illum quibusdam repellendus,
                    maiores modi laboriosam minima rem voluptatum fugit impedit
                    eveniet excepturi id in doloremque eius.
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">Abu jaid</div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">Your pages</div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">Listing You Recently Viewed</div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">Sponsored</div>
                </div>
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="languages">
                      <a href="#">English (US)</a> <a href="#">हिन्दी</a>{" "}
                      <a href="#">اردو</a> <a href="#">ਪੰਜਾਬੀ</a>{" "}
                      <a href="#">தமிழ்</a>{" "}
                      <a className="btn btn-light border">+</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2 bg-danger">
            <h6>Contact us</h6>
          </div>
        </div>
      </div>
    );
  }
}
