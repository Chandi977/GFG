import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile";

import { Link } from "react-router-dom";

function Protected({ isLoggedIn, children }) {
  // if user is logged in, show the children (dashboard), otherwise navigate to home
  return isLoggedIn ? children : <Navigate to="/" />;
}

function Dashboard() {
  return <h2>Dashboard (this is rendered after login)</h2>;
}

const App = () => {
  const isLoggedIn = true; // You can set this to false to test the protected route

  return (
    <>
      <Navbar />
      <div className="flex justify-center gap-6 p-6 bg-gray-800 text-white">
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserProfile />} />{" "}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </>
  );
};

export default App;
