import React from "react";

//Stylesheets
import "./Popup.scss";

export default function Popup({
  destinationFormData,
  setDestinationFormData,
  setDestination,
  destinationForm,
}) {
  const setDestinationFormChange = (e) => {
    e.preventDefault();

    const { name, value }= e.target;

    const newData = { ...setDestinationFormData };

    newData[name] = value;
    setDestinationFormData(newData);
  };
  console.log(destinationFormData);
  return (
    <div className="app__popup">
      <form className="app__popup-form">
        <label>Where Are You Going?</label>
        <input
          type="text"
          name="destination"
          value={destinationFormData.place}
          placeholder="Enter a destination..."
          onChange={setDestinationFormChange}
        />
        <button
          type="submit"
          onClick={() => destinationForm(e, setDestination)}
        >
          +
        </button>
      </form>
    </div>
  );
}
