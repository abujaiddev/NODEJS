import React, { Fragment, useState } from "react";
import { FaHome, FaRegHeart } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Bio from "../common/bio";

export default function ProfileSidebar(props) {
  const [bio, setBio] = useState(false);
  const toggle = () => {
    setBio(!bio);
  };
  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <MdPublic className="intro-icon" /> <h6 className="intro">Intro</h6>
          <div className="text-center i-message">
            <TiMessage />
          </div>
          <p className="bio-short">
            Add a short bio to tell people more about yourself.
          </p>
          <Link to="#" className="add-bio" onClick={toggle}>
            Add bio
          </Link>
          <div className="d-w-y-r">{bio && <Bio />}</div>
          <div className="border-bottom mt-2"></div>
          <p className="mb-1">
            <FaHome className="h-icon" />
            <span className="s-info"> Lives in New Delhi</span>
          </p>
          <p className="mt-1">
            <FaRegHeart className="h-icon" />
            <span className="s-info"> In a relationship</span>
          </p>
          <p className="">
            <FaHome className="h-icon" />
            <span className="s-info"> Lives in New Delhi</span>
          </p>
          <p className="">
            <FaHome className="h-icon" />
            <span className="s-info"> Lives in New Delhi</span>
          </p>
          <p className="">
            <FaHome className="h-icon" />
            <span className="s-info"> Lives in New Delhi</span>
          </p>
        </div>
      </div>
      <div className="card mt-2">
        <div className="card-body">Photos</div>
      </div>
      <div className="card mt-2">
        <div className="card-body">Friends · 66</div>
      </div>
    </Fragment>
  );
}
