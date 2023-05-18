import React from "react";

import { push } from "firebase/database";

export default function ToDoListForm() {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        // value={formData.thingsToDo}
        onChange={(e) => setFormChange(e)}
        placeholder="things to do..."
        name="thingsToDo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
