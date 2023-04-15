import React from "react";

export default function Form({
  listItems,
  setListItems,
  formData,
  setFormData,
}) {

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: 1,
      thingsToDo: formData.thingsToDo
    }

    const newItems = [...listItems, newItem];

    setListItems(newItems);
  }
  
  return (
    <div>
      <input type="text" value={formData.thingsToDo} placeholder="things to do..." name="thingsToDo" />
      <button type="submit" onSubmit={onSubmit}>Add</button>
    </div>
  );
}
