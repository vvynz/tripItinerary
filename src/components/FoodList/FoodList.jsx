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
  foodListMsg,
  setFoodListMsg,
}) {
  useEffect(() => {
    onValue(dbRef, function (snapshot) {
      if (snapshot.exists()) {
        let listArray = Object.entries(snapshot.val());
        // console.log(listArray[0][1])
        
        listArray[0][1].length === 0 ? alert("Cannot be blank") :

        clearListItems(setListItems)
        setListItems(listArray);
      } else {
        clearListItems(setListItems);
        setFoodListMsg("Nothing here yet...!");
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
        setFoodListMsg={setFoodListMsg}
      />
      <p className="display-msg">{foodListMsg}</p>
      {listItems.map((item) => (
        // item[1].length === 0? 
        // setMessage("Cannot be blank") : 
        <List
          key={item[0]}
          item={item[1]}
          removeItem={() => removeItem(dbName, item[0])}
        />
      ))}
    </section>
  );
}
