import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../auth/login";
import User from "../user";
import UserRoute from "./UserRoute";
import Signup from "../auth/signup";
import Profile from "../dashboard/user/profile";
import Users from "../users/users";
import Settings from "../settings";
import UserProfile from "../profile";

export default function routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <UserRoute exact path="/" component={User} />
      <UserRoute path="/user/profile" component={Profile} />
      <UserRoute path="/users" component={Users} />
      <UserRoute path="/settings" component={Settings} />
      <UserRoute path="/:username" component={UserProfile} />
    </Switch>
  );
}
