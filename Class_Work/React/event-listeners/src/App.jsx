// React aur useState hook ko import kar rahe hain.
import React from "react";
import { useState } from "react";

// Yeh ek functional component hai jiska naam 'App' hai.
const App = () => {
  // Yeh ek example function tha jo abhi use nahi ho raha hai.
  // function handleButtonClick() {
  //   console.log("Button clicked!");
  // }

  // 'useState' hook ka use karke 'value' naam ka state variable banaya gaya hai.
  // Iski initial value 0 hai. 'setValue' function se iski value update hogi.
  let [value, setValue] = useState(0);

  // Component ka JSX return ho raha hai jo browser mein dikhega.
  return (
    <>
      {/* Yeh button 'value' ko 1 se badhata hai jab ispar click hota hai. */}
      <button onClick={() => setValue(value + 1)}>Increse Value</button>
      {/* Yeh button 'value' ko 1 se ghatata hai jab ispar click hota hai. */}
      <button onClick={() => setValue(value - 1)}>Decrese Value</button>
      {/* Yahan 'value' state ki current value display ho rahi hai. */}
      <p>{value}</p>
    </>
  );
};

// App component ko export kar rahe hain taaki dusri files mein use kar sakein.
export default App;
