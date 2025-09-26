import React, { useState } from "react";
import Child from "./components/Child.jsx";

const App = () => {
  const [username, setUserName] = useState("Chandi");
  return (
    <>
      <p>value of name inside Parent : {username}</p>
      <Child setUserName={setUserName} username={username} />
      {/* <Child setUserName={setUserName} username={username} /> */}
    </>
  );
};

export default App;
