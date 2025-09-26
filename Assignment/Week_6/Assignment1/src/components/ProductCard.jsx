import React from "react";

const ProductCard = ({ name, price, inStock, image }) => {
  return (
    <div className="border p-3 rounded-lg shadow-md w-60">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-700">Price: ₹{price}</p>

      {/* Conditional Rendering */}
      {inStock ? (
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
          Add to Cart
        </button>
      ) : (
        <span className="bg-red-500 text-white px-3 py-1 rounded mt-2 inline-block">
          Sold Out
        </span>
      )}
    </div>
  );
};

export default ProductCard;
