import React from "react";

import "./List.scss";

export default function List({ id, place }) {
  return (
    <ol>
      <li key={id}>{place}</li>
    </ol>
  );
}
