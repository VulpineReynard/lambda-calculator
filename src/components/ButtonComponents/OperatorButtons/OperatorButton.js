import React from "react";

export const OperatorButton = ({char}) => {
  return (
    <button className="operator-btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */char} 
    </button>
  );
};