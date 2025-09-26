import React, { useState } from "react";
import products from "./data/products.json"; // <-- our JSON file
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove item from cart by index
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 flex gap-8">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
        <ProductList products={products} addToCart={addToCart} />
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
