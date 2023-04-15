import React from "react";

import "./List.css";

export default function List({ id, place }) {
  return (
    <ul>
      <li id={id}>{place}</li>
    </ul>
  );
}
