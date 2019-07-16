import React from "react";
import { specialsArray } from "../../../data";
import { useState } from "react";
import SpecialButton from "../SpecialButtons/SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specArray] = useState(specialsArray);

  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/specArray.map(special => (
        <SpecialButton  special={special}/>
      ))}
    </div>
  );
};

export default Specials;