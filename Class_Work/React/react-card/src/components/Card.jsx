// import React from "react";
import { useState } from "react";
import Card1 from "./Card1";

// const Card = ({ title, description, imageUrl }) => {
const Card = (props) => {
  let [value, setValue] = useState(0);
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={props.imageUrl}
        alt={props.title}
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{props.title}</h2>
        <p className="text-gray-600 mt-2">{props.description}</p>
        <p className="text-gray-600 mt-2">{value}</p>

        <button
          onClick={() => setValue(value + 1)}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-300"
        >
          Increase Value
        </button>
        <button
          onClick={() => setValue(value - 1)}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-300"
        >
          Decrese Value
        </button>
      </div>
      <Card1 />
    </div>
  );
};

export default Card;
