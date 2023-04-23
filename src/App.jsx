import React, { useState, useEffect } from "react";

// Firebase & databases
import { app, database } from "./firebaseConfig";
import { ref, onValue, remove } from "firebase/database";

// Components
import { Form, List } from "./components";

// Assests - images
import { images } from "./constants";

// stylesheets
import "./App.scss";

function App() {
  const [listItems, setListItems] = useState([]);

  const [formData, setFormData] = useState({
    thingsToDo: "",
  });
  const [message, setMessage] = useState("");

  const toDoListInDB = ref(database, "thingsToDo");

  useEffect(() => {
    onValue(toDoListInDB, function (snapshot) {
      if (snapshot.exists()) {
        let listArray = Object.entries(snapshot.val());
        clearListItems();
        setMessage("");
        setListItems(listArray);
      } else {
        clearListItems();
        setMessage("Nothing here yet...!");
      }
    });
  }, []);

  function clearListItems() {
    setListItems([]);
  }

  function removeItem(itemID) {
    let selectedItem = ref(database, `thingsToDo/${itemID}`);
    remove(selectedItem);
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
        {listItems.map((item) => (
          <List
            key={item[0]}
            place={item[1]}
            removeItem={() => removeItem(item[0])}
          />
        ))}
        <p className="display-msg">{message}</p>
      </section>
    </div>
  );
}

export default App;
