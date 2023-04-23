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
        console.log("listArr=", listArray)
        // console.log(Object.values(snapshot.val()))
        setListItems(listArray)

        // for (let item of listArray) {
        //   console.log("item=",item)
        //   addListItem(item);
        // }

        // for (let i = 0; i < listArray.length; i++) {
        //   // console.log(listArray[i])
        //   addListItem(listArray[i])
        // }
      } else {
        console.log("No data available");
      }
    }, []);

    // const getListItems = async () => {
    //   const dbRef = collection(toDoListInDB, "thingsToDo");
    //   const data = await getDocs(dbRef);

    //   setListItems(data.docs.map((doc) => doc.data()));
    //   console.log(data)
    // };

    // getListItems().catch((err) => console.log(err));
  }, []);

  function addListItem(item) {
    let itemID = item[0];
    let itemVal = item[1];

    // console.log(itemVal);

    const newItem = {
      id: itemID,
      thingsToDo: itemVal,
    };

    const newItems = [...listItems, newItem];
    // console.log("newItems=",newItems)
    setListItems(newItems);
  }

  function clearListItems() {
    setListItems([]);
  }
  console.log("liItems=",listItems)

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
