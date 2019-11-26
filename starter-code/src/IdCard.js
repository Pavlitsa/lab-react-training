import React, { Component } from "react";

// to style

const IdCard = props => {
  //console.log(props);
  return (
    <div className="id-container">
      <div>
        <img src={props.picture} alt={props.alt}></img>
      </div>
      <div className="id-text">
        <p>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last Name: </strong> {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {String(props.height)}
        </p>
        <p>
          <strong>Birth: </strong>
          {String(props.birth)}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
