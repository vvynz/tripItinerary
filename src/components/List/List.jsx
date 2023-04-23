import React from "react";

import "./List.scss";

export default function List({ id, place, removeItem }) {
  return (
    <ul>
      <li key={id} onClick={removeItem}>{place}</li>
    </ul>
  );
}
