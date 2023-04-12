import { useState } from "react";

import { List } from "./components";

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
console.log(placesToVisit)

function App() {
  return (
    <div className="App">
      <h1>NYC Trip Planner</h1>
      {placesToVisit.map((li, index) => (
        <List id={index} place={li.item} />
      ))}
    </div>
  );
}

export default App;
