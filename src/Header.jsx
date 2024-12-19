import React from "react";
import geoFox from "/geo-fox-2.png";

const Header = () => {
  return (
    <header className="flex flex-col flex-1">
      <img
        src={geoFox}
        className="foxtails-cocktails-logo"
        alt="cocktail generator"
      />
      <div className="logo-text">Foxtails</div>
    </header>
  );
};
export default Header;
