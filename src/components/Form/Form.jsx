import React from "react";

import { push } from "firebase/database";

export default function Form({
  listItems,
  setListItems,
  formData,
  setFormData,
  db,
  dbRef
}) {
  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      thingsToDo: formData.thingsToDo,
    };

    const newItems = [...listItems, newItem];

    // add new list item to db
    push(dbRef, newItem);

    setFormData({
      thingsToDo: ""
    })
  };

  const setFormChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const newData = { ...formData };

    newData[name] = value;

    setFormData(newData);
  };

  console.log("list item=", listItems);
  console.log("formData=", formData);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={formData.thingsToDo}
        onChange={setFormChange}
        placeholder="things to do..."
        name="thingsToDo"
      />
      <button type="submit">
        Add
      </button>
    </form>
  );
}
