export function hooks() {
  const hooks = {};

  const removeItem = (itemID) => {
    let selectedItem = ref(database, `thingsToDo/${itemID}`);
    remove(selectedItem);
  }
  hooks.removeItem = removeItem;

  return hooks;
}

export default hooks;