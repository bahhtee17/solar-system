import React from "react";

const EarthItem = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <iframe
        width='962'
        height='541'
        src='https://www.youtube.com/embed/JGXi_9A__Vc'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen></iframe>
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
