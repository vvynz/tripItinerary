import React, { useState, useEffect } from "react";

// Firebase & databases
import { app, database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";

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

  const toDoListInDB = ref(database, "thingsToDo");

  useEffect(() => {
    onValue(toDoListInDB, function (snapshot) {
      if (snapshot.exists()) {
        let listArray = Object.entries(snapshot.val());
        clearListItems();
        setListItems(listArray);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  function clearListItems() {
    setListItems([]);
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
        {listItems.length > 0
          ? listItems.map((item, index) => (
              <List key={item[0]} place={item[1]} />
            ))
          : "Nothing here...yet!"}
      </section>
    </div>
  );
}

export default App;
