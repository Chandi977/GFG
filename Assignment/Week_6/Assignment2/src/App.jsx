import React, { useState } from "react";
import products from "./data/products.json";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} />

      <div className="flex">
        <div
          className="flex-1 p-6 overflow-y-auto h-[calc(100vh-64px)]"
          style={{ marginRight: "24rem" }}
        >
          <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
          <ProductList products={products} addToCart={addToCart} />
        </div>

        <div className="w-96 fixed right-0 top-16 h-[calc(100vh-64px)] overflow-y-auto bg-white shadow-lg p-4">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
};

export default App;
