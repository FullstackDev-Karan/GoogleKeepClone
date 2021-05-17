import React from "react";
import logo from "../images/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" width="70px" height="60px" />
      <h1>Karan Keep</h1>
    </div>
  );
};

export default Header;
