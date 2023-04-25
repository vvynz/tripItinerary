import React from "react";

import "./List.scss";

export default function List({ id, item, removeItem }) {
  return (
    <ul>
      <li key={id} onClick={removeItem}>{item}</li>
    </ul>
  );
}
