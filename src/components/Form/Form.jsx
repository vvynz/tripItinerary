import React from "react";

export default function Form({
  listItems,
  setListItems,
  formData,
  setFormData,
}) {
  return (
    <div>
      <input type="text" />
      <button type="submit">Add</button>
    </div>
  );
}
