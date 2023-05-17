import React, { useEffect } from "react";

//Components
import { FoodListForm } from "../FoodList/FoodListForm";
import { List } from "../List/List";

//Firebase
import { onValue } from "firebase/database";

export default function FoodList({
  clearListItems,
  listItems,
  setListItems,
  db,
  dbName,
  dbRef,
  foodListFormData,
  removeItem,
  setFoodListFormData,
  message,
  setMessage,
}) {
  useEffect(() => {
    onValue(dbRef, function (snapshot) {
      if (snapshot.exists()) {
        let listArray = Object.entries(snapshot.val());
        clearListItems(setListItems)
        setListItems(listArray);
      } else {
        clearListItems(setListItems);
        setMessage("Nothing here yet...!");
      }
    });
  }, []);

  return (
    <section>
      <FoodListForm
        foodListFormData={foodListFormData}
        setFoodListFormData={setFoodListFormData}
        setListItems={setListItems}
        dbRef={dbRef}
        setMessage={setMessage}
      />
      <p className="display-msg">{message}</p>
      {listItems.map((item) => (
        <List
          key={item[0]}
          item={item[1]}
          removeItem={() => removeItem(dbName, item[0])}
        />
      ))}
    </section>
  );
}
