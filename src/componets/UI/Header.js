import React from "react";
import Card from "./Card";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.container}>
      <h1>Solar System</h1>
    </div>
  );
};

export default Header;
