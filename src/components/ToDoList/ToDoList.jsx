import React from "react";

//Components
import ToDoListForm from "./ToDoListForm";
import List from "../List/List";

function ToDoList({
  listItems,
  setListItems,
  toDoListFormData,
  setToDoListFormData,
  dbName,
  dbRef,
  removeItem,
  message,
  setMessage,
}) {
  return (
    <section>
      <ToDoListForm
        listItems={listItems}
        setListItems={setListItems}
        toDoListFormData={toDoListFormData}
        setToDoListFormData={setToDoListFormData}
        dbRef={dbRef}
        setMessage
      />
      {listItems.map((item) => (
        <List
          key={item[0]}
          item={item[1]}
          removeItem={() => removeItem(dbName, item[0])}
        />
      ))}
    </section>
  );
}

export default ToDoList;
