import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-80">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{item.name}</span>
              <span>₹{item.price}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
