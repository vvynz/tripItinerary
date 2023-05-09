import React from "react";

import { FoodListForm } from "../FoodList/FoodListForm";

export default function FoodList(
  {
    foodLst,
    setFoodList,
    db,
    dbRef,
    foodListFormData,
    setFoodListFormData,
    setMessage,
  }
) {
  return (
    <section>
      <FoodListForm
      foodListFormData={foodListFormData}
      setFoodListFormData={setFoodListFormData}
      dbRef={dbRef}
      setMessage={setMessage} />
    </section>
  );
}
