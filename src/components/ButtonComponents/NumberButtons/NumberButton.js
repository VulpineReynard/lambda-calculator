import React from "react";

const NumberButton = ({num}) => {
  return (
    <button className="num-btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */num}
    </button>
  );
};

export default NumberButton;