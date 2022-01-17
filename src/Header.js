import React from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      This is Header
      <button
        onClick={() => {
          navigate("/home");
        }}>
        to Home
      </button>
    </div>
  );
};

export default Header;
