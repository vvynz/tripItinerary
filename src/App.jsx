import { useState } from "react";

import { List } from "./components";

import { images } from "./constants";

import "./App.css";

const placesToVisit = [
  {
    id: 1,
    item: "Go to Times Square",
  },
  {
    id: 2,
    item: "Visit the Met",
  },
  {
    id: 3,
    item: "Visit Central Park",
  },
];


function App() {
  return (
    <div className="App">
      <h1>NYC Trip Planner</h1>
      <img src={images.logo} />
      {placesToVisit.map((li, index) => (
        <List key={index} place={li.item} />
      ))}
    </div>
  );
}

export default App;
