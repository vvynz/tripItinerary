import React from "react";

import { FoodListForm } from "../FoodList/FoodListForm";

export default function FoodList(
  {
    listItems,
    setListItems,
    db,
    dbRef,
    formData,
    setFormData,
    setMessage,
  }
) {
  return (
    <section>
      <FoodListForm />
    </section>
  );
}
