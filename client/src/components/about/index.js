import React from "react";
import { useHistory } from "react-router-dom";

export default function About() {
  let history = useHistory();
  function goBack() {
    history.goBack();
  }
  function goHome() {
    history.push("/home");
  }
  return (
    <div className="container">
      <button className="btn btn-primary" onClick={goBack}>
        Previous
      </button>{" "}
      <button className="btn btn-success" onClick={goHome}>
        Home
      </button>
      <p>
        About us Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Labore neque deleniti facilis nulla voluptates, quo sunt quos quae modi
        enim est? Ad voluptatum, ab reiciendis harum labore distinctio magnam
        quidem!
      </p>
    </div>
  );
}
