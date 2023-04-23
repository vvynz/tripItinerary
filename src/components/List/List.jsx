import React from "react";

import "./List.scss";

export default function List({ id, place }) {
  return (
    <ul>
      <li key={id}>{place}</li>
    </ul>
  );
}
