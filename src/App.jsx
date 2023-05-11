import React, { useState, useEffect } from "react";

// Firebase & databases
import { app, database } from "./firebaseConfig";
import { ref, onValue, remove } from "firebase/database";

// Components
import { FoodList, Form, List } from "./components";

//Functions
import hooks from "./hooks";

// Assests - images
import { images } from "./constants";

// stylesheets
import "./App.scss";

function App() {
  const [listItems, setListItems] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const [formData, setFormData] = useState({
    thingsToDo: "",
  });
  const [foodListFormData, setFoodListFormData] = useState({
    thingsToEat: "",
  });
  const [message, setMessage] = useState("");

  const toDoListInDB = ref(database, "thingsToDo");
  const foodListInDB = ref(database, "foodList");

  const { removeItem } = hooks();

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

  return (
    <div className="App">
      <h1>NYC Trip Planner</h1>
      <img src={images.logo} />
      <div className="app_list-wrapper">
        <div className="app_list-container">
          <Form
            listItems={listItems}
            setListItems={setListItems}
            formData={formData}
            setFormData={setFormData}
            db={database}
            dbRef={toDoListInDB}
            setMessage={setMessage}
          />
          {listItems.map((item) => (
            <List
              key={item[0]}
              item={item[1]}
              removeItem={() => removeItem(item[0])}
            />
          ))}
        </div>
        <div className="app_list-container">
          <FoodList
            listItems={foodList}
            setListItems={setFoodList}
            foodListFormData={foodListFormData}
            setFoodListFormData={setFoodListFormData}
            db={database}
            dbRef={foodListInDB}
            setMessage={setMessage}
          />
        </div>
      </div>
      <p className="display-msg">{message}</p>
    </div>
  );
}

export default App;
