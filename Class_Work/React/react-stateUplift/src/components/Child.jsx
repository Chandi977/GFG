import React from "react";

const Child = (props) => {
  function handleChange(event) {
    props.setUserName(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter User Name"
        onChange={handleChange}
        value={props.username}
      />

      <p>User Name : {props.username}</p>
    </div>
  );
};

export default Child;
