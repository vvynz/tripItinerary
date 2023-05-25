import React, { useState, useEffect } from "react";

// Firebase & databases
import { app, database } from "./firebaseConfig";
import { ref, onValue, remove } from "firebase/database";

// Components
import { FoodList, List, ToDoList, ToDoListForm } from "./components";

//Functions
import hooks from "./hooks";

// Assests - images
import { images } from "./constants";

// stylesheets
import "./App.scss";

function App() {
  const [listItems, setListItems] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const [toDoListFormData, setToDoListFormData] = useState({
    thingsToDo: "",
  });
  const [foodListFormData, setFoodListFormData] = useState({
    foodList: "",
  });
  const [message, setMessage] = useState("");

  const toDoListInDB = ref(database, "thingsToDo");
  const foodListInDB = ref(database, "foodList");

  const { clearListItems, removeItem } = hooks();

  useEffect(() => {
    onValue(toDoListInDB, function (snapshot) {
      if (snapshot.exists()) {
        let listArray = Object.entries(snapshot.val());
        clearListItems(setListItems);
        setMessage("");
        setListItems(listArray);
      } else {
        clearListItems(setListItems);
        setMessage("Nothing here yet...!");
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>NYC Trip Planner</h1>
      <img src={images.logo} />
      <div className="app_list-wrapper">
        <div className="app_list-container">
          <ToDoList
            listItems={listItems}
            setListItems={setListItems}
            toDoListFormData={toDoListFormData}
            setToDoListFormData={setToDoListFormData}
            db={database}
            dbName={"thingsToDo"}
            dbRef={toDoListInDB}
            removeItem={removeItem}
            message={message}
            setMessage={setMessage}
          />
        </div>
        <div className="app_list-container">
          <FoodList
            clearListItems={clearListItems}
            listItems={foodList}
            setListItems={setFoodList}
            foodListFormData={foodListFormData}
            setFoodListFormData={setFoodListFormData}
            db={database}
            dbName={"foodList"}
            dbRef={foodListInDB}
            removeItem={removeItem}
            message={message}
            setMessage={setMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
