import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../auth/login";
import Home from "../home";
import UserDashboard from "../dashboard/UserDashboard";
import UserRoute from "./UserRoute";
import Signup from "../auth/signup";

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <UserRoute path="/dashboard/UserDashboard" component={UserDashboard} />
    </Switch>
  );
}
