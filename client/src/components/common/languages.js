import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Languages extends Component {
  render() {
    return (
      <Fragment>
        <span className="pr-1">English (UK)</span>
        <Link to="#" className="ml-2">
          English (US)
        </Link>
        <Link to="#" className="ml-2">
          हिन्दी
        </Link>
        <Link to="#" className="ml-2">
          ਪੰਜਾਬੀ
        </Link>
        <Link to="#" className="btn btn-light btn-languages ml-2">
          +
        </Link>
      </Fragment>
    );
  }
}
