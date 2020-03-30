import React from "react";

const BoxColor = props => {
  console.log(props);
  return (
    <div style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}className="box-color-container">
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
};

export default BoxColor;
