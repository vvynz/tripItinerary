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

  return hooks;
}

export default hooks;