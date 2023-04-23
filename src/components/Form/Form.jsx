import React from "react";

import { push } from "firebase/database";

export default function Form({
  listItems,
  setListItems,
  formData,
  setFormData,
  db,
  dbRef,
}) {
  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = formData.thingsToDo;

    // add new list item to db
    push(dbRef, newItem)
      .then(() => {
        alert("Added to db!");
      })
      .catch((err) => {
        console.log(err.message);
      });

    setFormData({
      thingsToDo: "",
    });
  };

  const setFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const newData = { ...formData };

    newData[name] = value;

    setFormData(newData);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        value={formData.thingsToDo}
        onChange={(e) => setFormChange(e)}
        placeholder="things to do..."
        name="thingsToDo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
