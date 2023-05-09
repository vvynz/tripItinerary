import React from "react";

export function FoodListForm() {

  const onSubmit = (e) => {
    e.preventDefault();
    alert("submitted!")
  }

  return(
    <form onSubmit={onSubmit}>
      <input
      type="text"
      placeholder="things to eat..."
      name="thingsToEat" />
      <button type="submit">Add</button>
    </form>
  );
}

export default FoodListForm;