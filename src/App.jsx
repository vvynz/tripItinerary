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
  const [listItems, setListItems] = useState([]);
  // useState(
  //   () => JSON.parse(localStorage.getItem("listItems")) || []
  // );

  const [formData, setFormData] = useState({
    thingsToDo: "",
  });

  const toDoListInDB = ref(database, "thingsToDo");

  useEffect(() => {
    // localStorage.setItem("listItems", JSON.stringify(listItems));

    onValue(toDoListInDB, function (snapshot) {
      if (snapshot.exists()) {
        let listArray = Object.entries(snapshot.val());
        clearListItems();
        // console.log(listItems)
  
        for (let item of listArray) {
          // console.log(item)
          addListItem(item);
        }
      } else {
        console.log("No data available")
      }
    });
  }, []);

  function addListItem(item) {
    let itemID = item[0];
    let itemVal = item[1];

    console.log(itemVal);

    const newItem = {
      id: itemID,
      thingsToDo: itemVal,
    };

    const newItems = [...listItems, newItem];
    // console.log(listItems)
    setListItems(newItems);
  };

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
        {listItems.length !== 0 ? (
          listItems.map((item, index) => (
            <List key={index} place={item.thingsToDo} />
          ))
        ) : (
          "Nothing here...yet!"
        )}
      </section>
    </div>
  );
}

export default App;
