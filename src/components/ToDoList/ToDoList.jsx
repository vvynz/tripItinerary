import React from "react";

//Components
import ToDoListForm from "./ToDoListForm";

function ToDoList({
listItems,
setListItems,
toDoListFormData,
setToDoListFormData,
dbRef,
setMessage
}) {
  return(
    <section>
      <ToDoListForm 
      listItems={listItems}
      setListItems={setListItems}
      toDoListFormData={toDoListFormData}
      setToDoListFormData={setToDoListFormData}
      dbRef={dbRef}
      setMessage
       />
    </section>
  );
}

export default ToDoList;