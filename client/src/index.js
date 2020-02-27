import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./components/routes/routes";

ReactDOM.render(
  <Router>
    <App />
    <Route component={routes} />
  </Router>,
  document.getElementById("root")
);
