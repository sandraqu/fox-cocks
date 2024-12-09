import React from "react";
import logo from "/fox-cocks-clear.png";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="fox-cocks-logo" alt="cocktail generator" />
      <h1>Fox Cocks</h1>
    </header>
  );
};

export default Header;
