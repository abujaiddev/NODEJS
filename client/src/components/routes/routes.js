import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Blog from "../blog";
import Author from "../author";
import Login from "../auth/login";

export default function routes() {
  return (
    <Fragment>
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/author/:id" component={Author} />
      <Route path="/login" component={Login} />
    </Fragment>
  );
}
