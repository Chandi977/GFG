import React from "react";
import ProductList from "./components/ProductList";
import products from "./data/products.json";

const App = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
