import React, { useEffect } from "react";

//Components
import { FoodListForm } from "../FoodList/FoodListForm";
import { List } from "../List/List";

//Firebase
import { onValue } from "firebase/database";

export default function FoodList({
  foodList,
  setListItems,
  db,
  dbRef,
  foodListFormData,
  setFoodListFormData,
  setMessage,
}) {

  useEffect(() => {
    onValue(dbRef, function(snapshot) {
      if (snapshot.exists()) {
        let listArray = Object.entries(snapshot.val());
        setListItems(listArray);
      } else {
        setMessage("Nothing here yet...!");
      }
    })
  }, []);
  return (
    <section>
      <FoodListForm
        foodListFormData={foodListFormData}
        setFoodListFormData={setFoodListFormData}
        dbRef={dbRef}
        setMessage={setMessage}
      />
      {/* {FoodList.map((item) => (
        // console.log(item)
        // <List />
      ))} */}
    </section>
  );
}
