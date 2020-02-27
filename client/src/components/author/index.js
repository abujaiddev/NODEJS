import React from "react";
import { useParams } from "react-router-dom";

export default function Author() {
  function Post() {
    let { id } = useParams();
    return <strong>Now showing post Id {id}</strong>;
  }
  return (
    <div className="container">
      <Post />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, vitae
      officiis! Enim atque fugit reiciendis voluptatem iure ducimus voluptatum
      dolore delectus vel optio, architecto voluptates blanditiis ullam error
      nostrum molestias!
    </div>
  );
}
