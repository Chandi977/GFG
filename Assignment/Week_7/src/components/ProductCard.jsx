import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-60">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-700">₹{product.price}</p>

      {/* Conditional Rendering */}
      {product.inStock ? (
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
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
