import React from "react";

const EarthItem = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.nameSake}</p>
      <p>{props.formation}</p>
      <p>{props.orbitAndRotation}</p>
      <p>{props.sizeAndDistance}</p>
      <p>{props.atmosphere}</p>
      <p>{props.surface}</p>
    </div>
  );
};

export default EarthItem;
