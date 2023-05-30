import React from "react";

import { push } from "firebase/database";

export default function ToDoListForm({
  listItems,
  setListItems,
  toDoListFormData,
  setToDoListFormData,
  db,
  dbRef,
  setMessage,
}) {
  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = toDoListFormData.thingsToDo;

    // add new list item to db
    push(dbRef, newItem)
      .then(() => {
        // alert("Added to db!");
      })
      .catch((err) => {
        setMessage(err.message);
      });

      setToDoListFormData({
      thingsToDo: "",
    });
  };

  const setFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const newData = { ...toDoListFormData };

    newData[name] = value;

    setToDoListFormData(newData);
  };

  return (
    <form className="list_form" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        value={toDoListFormData.thingsToDo}
        onChange={(e) => setFormChange(e)}
        placeholder="things to do..."
        name="thingsToDo"
      />
      <button type="submit">+</button>
    </form>
  );
}
