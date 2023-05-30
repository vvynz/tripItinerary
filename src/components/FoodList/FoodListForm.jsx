import React from "react";

import { push } from "firebase/database";

export function FoodListForm({
  dbRef,
  foodListFormData,
  setFoodListFormData,
  setListItems,
  setMessage,
}) {
  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = foodListFormData.foodList;

    push(dbRef, newItem)
      .then(() => {
        // alert("Added to db!")
      })
      .catch((err) => {
        setMessage(err.message);
      });

    setFoodListFormData({
      foodList: "",
    });
  };

  const setFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const newData = { ...foodListFormData };

    newData[name] = value;

    setFoodListFormData(newData);
  };

  return (
    <form className="list_form" onSubmit={onSubmit}>
      <input
        type="text"
        value={foodListFormData.foodList}
        placeholder="things to eat..."
        onChange={(e) => setFormChange(e)}
        name="foodList"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default FoodListForm;
