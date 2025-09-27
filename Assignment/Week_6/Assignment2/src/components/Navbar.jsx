import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center bg-blue-600 px-6 py-3 text-white shadow-md">
      <h1 className="text-xl font-bold">E-Shop</h1>

      <ul className="flex gap-6">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Products</li>
        <li className="relative cursor-pointer hover:underline">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
