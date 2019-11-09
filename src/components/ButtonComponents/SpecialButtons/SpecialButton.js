import React from "react";
import './specialButton.css'

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button >{props.text}</button>
    </>
  );
};

export default SpecialButton;
