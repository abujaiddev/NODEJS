import React, { Fragment } from "react";
import { MdPublic } from "react-icons/md";
export default function bio() {
  return (
    <Fragment>
      <textarea
        name=""
        id=""
        className="form-control bio-textarea"
        placeholder="Describe who you are"
      ></textarea>
      <div className="bio-t-b">
        <div className="btn btn-primary float-right mt-4 btn-save ml-2 mr-2">
          Save
        </div>
        <btton className="btn btn-dark float-right mt-4 ml-2  btn-cancel">
          Cancel
        </btton>
        <span>{/* <MdPublic /> */}</span>
        <btton className="btn btn-light float-right mt-4 btn-public">
          Public
        </btton>
      </div>
    </Fragment>
  );
}
