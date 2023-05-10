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

  const setFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const newData = { ...foodListFormData };

    newData[name] = value;

    setFoodListFormData(newData);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="things to eat..."
        onChange={setFormChange}
        name="thingsToEat"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default FoodListForm;
