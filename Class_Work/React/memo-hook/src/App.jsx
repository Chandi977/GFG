import React, { useCallback, useState } from "react";
import Child from "./Child";

// ==================================================================================
// CONCEPT: useCallback Hook
// ==================================================================================
// Definition:
// `useCallback` ek React Hook hai jo ek function ko "memoize" (yaad rakhna) karta hai.
// Iska matlab hai ki yeh function har render par dobara create nahi hota.
// Yeh wahi function reference (memory address) wapas deta hai jab tak uski dependencies change na ho.

// Difference from a normal function:
// Normal function har baar parent component ke re-render hone par naya ban jata hai.
// `useCallback` se bana function tab tak naya nahi banta jab tak uski dependency array `[]` mein di gayi values change na ho.

// Why use it with React.memo?
const App = () => {
  // count1 aur count2 ke liye state variables banaye gaye hain.
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const sayhi = useCallback(() => {
    console.log("hi");
  }, []);
  return (
    // Yeh JSX hai jo browser mein render hoga.
    <>
      {/* count1 ki value display ho rahi hai */}
      <p>Count1 value is {count1}</p>
      {/* Yeh buttons count1 ki value ko update karte hain */}
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <button onClick={() => setCount1(count1 - 1)}>Decrement</button>
      <button onClick={() => setCount1(0)}>Reset</button>

      <br />

      {/* count2 ki value display ho rahi hai */}
      <p>Count2 value is {count2}</p>
      {/* Yeh buttons count2 ki value ko update karte hain */}
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
      <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
      <button onClick={() => setCount2(0)}>Reset</button>

      <br />
      {/* Child component ko count2 prop ke saath render kiya ja raha hai */}
      <Child count2={count2} sayhi={sayhi} />
    </>
  );
};

export default App;
