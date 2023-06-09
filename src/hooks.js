import { database } from "./firebaseConfig";
import { ref, remove } from "firebase/database";

export function hooks() {
  const hooks = {};

  const removeItem = (dbName, itemID) => {
    let selectedItem = ref(database, `${dbName}/${itemID}`);
    remove(selectedItem);
  }
  hooks.removeItem = removeItem;

  const clearListItems = (state) => {
    state([]);
  }
  hooks.clearListItems = clearListItems;

  const destinationForm = (e) => {
    e.preventDefault();

    console.log("I work!")
  }
  hooks.destinationForm = destinationForm;

  return hooks;
}

export default hooks;