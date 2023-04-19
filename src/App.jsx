import React, { useState, useEffect } from "react";

// Firebase & databases
import { app, database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";

// Components
import { Form, List } from "./components";

// Assests - images
import { images } from "./constants";

// stylesheets
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
  const [listItems, setListItems] = useState(
    () => JSON.parse(localStorage.getItem("listItems")) || []
  );

  const [formData, setFormData] = useState({
    thingsToDo: "",
  });

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const toDoListInDB = ref(database, "thingsToDo");

  onValue(toDoListInDB, function (snapshot) {
    let listItems = Object.entries(snapshot.val())

    for (let item of listItems) {
      // console.log(item)
      addListItem(item)
    }
  });

  const addListItem = (item) => {
    let itemID = item[0];

    console.log(itemID)
  }

  return (
    <div className="App">
      <h1>NYC Trip Planner</h1>
      <img src={images.logo} />
      <section className="app_list-container">
        <Form
          listItems={listItems}
          setListItems={setListItems}
          formData={formData}
          setFormData={setFormData}
          db={database}
          dbRef={toDoListInDB}
        />
        {listItems.map((item, index) => (
          <List key={index} place={item.thingsToDo} />
        ))}
      </section>
    </div>
  );
}

export default App;
