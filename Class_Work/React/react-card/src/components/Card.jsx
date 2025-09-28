import { useState } from "react";
import Card1 from "./Card1";

const Card = (props) => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <img src={props.imageUrl} alt={props.title} />

      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Value: {value}</p>

        <button onClick={() => setValue(value + 1)}>Increase Value</button>
        <button onClick={() => setValue(value - 1)}>Decrease Value</button>
      </div>

      <Card1 />
    </div>
  );
};

export default Card;
