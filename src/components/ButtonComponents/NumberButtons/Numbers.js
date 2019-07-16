import React from "react";
import { useState } from "react";
import { numbersArray } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbers] = useState(numbersArray);
  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/numbers.map(num => (
        <NumberButton num={num}/>
      ))}
    </div>
  );
};

export default Numbers;