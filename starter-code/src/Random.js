import React from "react";

const Random = props => {
  let random = Math.random() * (props.max - props.min) + props.min;;
  return (
    <div className="random-container">
      <p>Random value between {props.min} and {props.max} => {Math.floor(random)}</p>
    </div>
  );
};

export default Random;
