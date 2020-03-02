import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Blog from "../blog";
import Author from "../author";
import Login from "../auth/login";
import UserDashboard from "../dashboard/UserDashboard";
import UserRoute from "./UserRoute";

export default function routes() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/author/:id" component={Author} />
      <Route path="/login" component={Login} />
      <UserRoute path="/dashboard/UserDashboard" component={UserDashboard} />
    </Switch>
  );
}
