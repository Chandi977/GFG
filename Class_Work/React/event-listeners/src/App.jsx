import React from "react";
import { useState } from "react";

const App = () => {
  // function handleButtonClick() {
  //   console.log("Button clicked!");
  // }
  let [value, setValue] = useState(0);
  return (
    <>
      <button onClick={() => setValue(value + 1)}>Increse Value</button>
      <button onClick={() => setValue(value - 1)}>Decrese Value</button>
      <p>{value}</p>
    </>
  );
};

export default App;
