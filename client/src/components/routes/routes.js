import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Blog from "../blog";
import Pricing from "../author";

export default function routes() {
  return (
    <Fragment>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/author/:id" component={Pricing} />
    </Fragment>
  );
}
