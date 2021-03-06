import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/login";
import Home from "../home";
import UserRoute from "./UserRoute";
import Signup from "../auth/signup";
import Profile from "../dashboard/user/profile";
import Users from "../users/users";
import Settings from "../settings";
import UserProfile from "../profile";
import FindFriends from "../users/findFriends";
import Userdashboard from "../user/user";

export default function Routes() {
  useEffect(() => {
    let urlName = window.location.pathname.slice(1);
    if (urlName === "settings") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "#e9ebee";
    }
  });

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <UserRoute exact path="/" component={Home} />
      <UserRoute exact path="/user/profile" component={Profile} />
      <UserRoute exact path="/users" component={Users} />
      <UserRoute exact path="/settings" component={Settings} />
      <UserRoute exact path="/username/:username" component={UserProfile} />

      {/* friends */}
      <UserRoute path="/find-friends" component={FindFriends} />
      <UserRoute path="/user/:id" component={Userdashboard} />
    </Switch>
  );
}
