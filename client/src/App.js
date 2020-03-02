import React from "react";
import Header from "./components/header/header";
import setAuthToken from "./components/util/setAuthToken";
import jwt_decode from "jwt-decode";
import store from "./components/store/store";
import { setCurrentUser, logout } from "./components/store/actions/authAction";

function App() {
  if (localStorage.token) {
    const token = localStorage.getItem("token");
    setAuthToken(token);
    const decoded = jwt_decode(token); // get user information
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logout());
      // Redirect to login
      window.location.href = "./login";
    }
  }
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}

export default App;
