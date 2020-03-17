import React, { Fragment, useState } from "react";
import { FaHome, FaRegHeart } from "react-icons/fa";
import {
  MdPublic,
  MdSchool,
  MdLocationOn,
  MdWork,
  MdStarBorder,
  MdPhoto,
  MdPeople
} from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Languages from "../common/languages";
// import Bio from "../common/bio";

export default function ProfileSidebar(props) {
  const [bio, setBio] = useState(false);
  const toggleBio = () => {
    setBio(!bio);
  };

  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <MdPublic className="intro-icon" /> <h6 className="intro">Intro</h6>
          {!bio ? (
            <Fragment>
              <div className="text-center i-message">
                <TiMessage />
              </div>
              <p className="bio-short">
                Add a short bio to tell people more about yourself.
              </p>
              <Link to="#" className="add-bio" onClick={toggleBio}>
                Add bio
              </Link>
            </Fragment>
          ) : (
            ""
          )}
          <div className="mt-2 bio">
            {bio && (
              <Fragment>
                <textarea
                  name=""
                  className="form-control bio-textarea"
                  placeholder="Describe who you are"
                ></textarea>
                <div className="bio-t-b">
                  <div className="btn btn-primary float-right mt-4 btn-save ml-2 mr-2">
                    Save
                  </div>
                  <button
                    className="btn btn-dark float-right mt-4 ml-2  btn-cancel"
                    onClick={toggleBio}
                  >
                    Cancel
                  </button>
                  <span>{/* <MdPublic /> */}</span>
                  <button className="btn btn-light float-right mt-4 btn-public">
                    Public
                  </button>
                </div>
              </Fragment>
            )}
          </div>
          <div className="border-top mt-3 mb-3"></div>
          <p className="hm-1">
            <FaHome className="h-icon" />
            <span className="s-info "> Lives in New Delhi</span>
          </p>
          <p className="hm-1">
            <MdWork className="h-icon" />
            <span className="s-info">Workplace</span>
          </p>
          <p className="hm-1">
            <MdSchool className="h-icon" />
            <span className="s-info">School or university</span>
          </p>
          <p className="hm-1">
            <MdLocationOn className="h-icon" />
            <span className="s-info">Home town</span>
          </p>
          <p className="hm-1">
            <FaRegHeart className="h-icon" />
            <span className="s-info">Relationship</span>
          </p>
          <div className="border-bottom mb-3"></div>
          <MdStarBorder className="star" />
          <span className="showcase">
            <p>
              Showcase what's important to you by adding photos, Pages, groups
              and more to your featured section on your public profile.
            </p>
          </span>
          <br />
          <Link to="#" className="add-featured">
            Add to Featured
          </Link>
        </div>
      </div>
      <div className="card mt-2">
        <div className="card-body">
          <MdPhoto className="circle-icon green" />
          <span> Photos</span>
          <Link to="#" className="float-right size-12">
            Add Photo
          </Link>
        </div>
      </div>
      <div className="card mt-2">
        <div className="card-body">
          <MdPeople className="circle-icon pink" />
          <span> Friends · 66</span>
          <Link to="#" className="float-right size-12">
            Find Friends
          </Link>
        </div>
      </div>
      <div className="card mt-2">
        <div className="card-body size-12">
          <Languages />
        </div>
      </div>
    </Fragment>
  );
}
