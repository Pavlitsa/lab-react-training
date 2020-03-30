import React from "react";

const Greetings = props => {
  let greeting;
  if (props.lang === "de") greeting = "Hallo";
  if (props.lang === "fr") greeting = "Salut";
  if (props.lang === "es") greeting = "Hola";
  if (props.lang === "en") greeting = "Hello";
  return (
    <div className="greetings-container">
      <p>
        {greeting} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
