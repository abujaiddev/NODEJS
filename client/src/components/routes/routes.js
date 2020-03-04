import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../auth/login";
import Home from "../home";
import Dashboard from "../dashboard/user/index";
import UserRoute from "./UserRoute";
import Signup from "../auth/signup";
import Profile from "../dashboard/user/profile";

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <UserRoute path="/dashboard/user" component={Dashboard} />
      <UserRoute path="/user/profile" component={Profile} />
    </Switch>
  );
}
