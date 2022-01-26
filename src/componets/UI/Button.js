import React from "react";

const Button = (props) => {
  return (
    <a onClick={props.onClick} className={props.container}>
      <img className={props.className} src={props.src} />
    </a>
  );
};

export default Button;
