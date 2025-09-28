// App.jsx
import React, { useState } from "react";

function App() {
  const [userStatus, setUserStatus] = useState("guest"); // 'guest', 'user', 'admin'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Conditional Rendering Demo</h1>

      {/* Logical Rendering */}
      {showMessage && <p>Welcome to our website! Enjoy your stay.</p>}

      {/* Conditional Rendering using ternary operator */}
      <p>{isLoggedIn ? "You are logged in." : "You are not logged in."}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      <div>
        {userStatus === "guest" ? (
          <p>Hello Guest! Please login to access more features.</p>
        ) : userStatus === "user" ? (
          <p>Welcome back, valued user!</p>
        ) : userStatus === "admin" ? (
          <p>Admin Panel: You have full access.</p>
        ) : (
          <p>Status unknown.</p>
        )}
      </div>

      <hr />

      <div>
        <button onClick={() => setUserStatus("guest")}>Set Guest</button>
        <button onClick={() => setUserStatus("user")}>Set User</button>
        <button onClick={() => setUserStatus("admin")}>Set Admin</button>
      </div>
    </div>
  );
}

export default App;
