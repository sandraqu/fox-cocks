import React from "react";
import logo from "/foxtails-logo.svg";

const Header = () => {
  return (
    <header className="flex flex-col flex-1">
      <img
        src={logo}
        className="foxtails-cocktails-logo"
        alt="foxtails - your artificial intelligence cocktail generator"
      />
      {/* <div className="logo-text">Foxtails</div> */}
    </header>
  );
};
export default Header;
