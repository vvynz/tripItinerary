import React from "react";

import { push } from "firebase/database";

export function FoodListForm({
  dbRef,
  foodListFormData,
  setFoodListFormData,
  setMessage,
}) {
  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = foodListFormData.thingsToEat;

    push(dbRef, newItem)
      .then(() => alert("Added to db!"))
      .catch((err) => console.log(err.message));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="things to eat..." name="thingsToEat" />
      <button type="submit">Add</button>
    </form>
  );
}

export default FoodListForm;
