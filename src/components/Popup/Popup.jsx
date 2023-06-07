import React from "react";

//Stylesheets
import "./Popup.css";

export default function Popup() {
  return(
    <div className="app__popup">
      <form className="app__popup-form">
        <label>Where Are You Going?</label>
        <input placeholder="Enter a destination..." />
        <button type="submit">+</button>
      </form>
    </div>
  );
}