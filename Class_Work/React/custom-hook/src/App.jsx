import React from "react";
import Custom from "./Custom";

const App = () => {
  const [data] = Custom("https://dummyjson.com/products");
  console.log(data);

  return (
    <div>
      <h1>Product List</h1>
      {data ? (
        <ul>
          {data.products.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
