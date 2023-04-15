import { useState } from "react";

import { Form, List } from "./components";

import { images } from "./constants";

import "./App.scss";

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
      <section className="app_list-container">
        <Form />
        {placesToVisit.map((li, index) => (
          <List key={index} place={li.item} />
        ))}
      </section>
    </div>
  );
}

export default App;
