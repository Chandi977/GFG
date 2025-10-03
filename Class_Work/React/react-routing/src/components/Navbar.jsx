import React from "react";
import { User } from "lucide-react"; // user icon
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold">MyApp</div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400 transition">
          About Us
        </Link>
        <Link to="/services" className="hover:text-blue-400 transition">
          Services
        </Link>
        <Link to="/contact" className="hover:text-blue-400 transition">
          Contact Us
        </Link>
      </div>

      {/* User Icon */}
      <div className="cursor-pointer hover:text-blue-400 transition">
        <User size={28} />
      </div>
    </nav>
  );
};

export default Navbar;
