import React from "react";

//Stylesheets
import "./Popup.scss";

export default function Popup({ destinationFormData, setDestinationFormData, setDestination, destinationForm }) {
  const setDestinationFormChange = (e) => {
    e.preventDefault();

    const value = e.target;

    const newData = value;

  };
  return (
    <div className="app__popup">
      <form className="app__popup-form">
        <label>Where Are You Going?</label>
        <input
          value="text"
          placeholder="Enter a destination..."
          onChange={setDestination}
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
