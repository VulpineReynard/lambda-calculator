import React from "react";
import { operatorsArray } from "../../../data";
import { useState } from "react";
import { OperatorButton } from "../OperatorButtons/OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opArray] = useState(operatorsArray);
  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/opArray.map(operator => {
         return OperatorButton(operator);
      })}
    </div>
  );
};

export default Operators;