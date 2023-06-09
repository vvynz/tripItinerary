import React from "react";

//Stylesheets
import "./Popup.scss";

export default function Popup({ setDestination, destinationForm }) {
  return(
    <div className="app__popup">
      <form className="app__popup-form">
        <label>Where Are You Going?</label>
        <input placeholder="Enter a destination..." />
        <button type="submit" onClick={destinationForm}>+</button>
      </form>
    </div>
  );
}