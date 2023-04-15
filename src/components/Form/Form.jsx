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
      thingsToDo: formData.thingsToDo,
    };

    const newItems = [...listItems, newItem];

    setListItems(newItems);

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
