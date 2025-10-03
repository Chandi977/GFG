// import React from "react";

// // React.memo ek higher-order component hai.
// // Yeh component ko memoize karta hai, matlab jab tak iske props change nahi hote,
// // yeh re-render nahi hoga. Isse performance improve hoti hai.



// const Child = React.memo((props) => {
//   // Jab bhi Child component render hoga, yeh console mein log hoga.
//   console.log("Child Component Rendered"); // Yeh message console mein dikhega.
//   return <div>Value in Child is {props.count}</div>; // Child component ka UI.
// });

// export default Child;

import React from "react";

// Yeh ek functional component hai.
const Child = (props) => {
  // Jab bhi Child component render hoga, yeh console mein log hoga.
  console.log("Child Component Rendered");
  return <div>Value in Child is {props.count2}</div>;
};

// React.memo ka use karke, yeh component tabhi re-render hoga jab iske props (count2) change honge.
export default React.memo(Child);
