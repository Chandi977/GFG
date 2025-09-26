import React, { useContext } from "react";
import { DataContext } from "../App";

const Card2 = () => {
  const { title, description } = useContext(DataContext);

  return (
    <div className="p-4 bg-gray-400 rounded">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card2;
