import React from "react";
import logo from "/fox-cocks-clear.png";
import geoFox from "/geo-fox-2.png";

const Header = () => {
  return (
    <header className="flex flex-col flex-1">
      <img
        src={geoFox}
        className="foxtails-cocktails-logo"
        alt="cocktail generator"
      />
      <h1>Foxtails</h1>
    </header>
  );
};

export default Header;
