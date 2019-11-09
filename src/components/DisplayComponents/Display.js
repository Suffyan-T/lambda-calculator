import React from "react";
import './display.css';

const Display = (props) => {
  return <div className='display'>{props.value}</div>;
};

// Exports the Display Component
export default Display;