import React from "react";
import Markdown from "react-markdown";

const Cocktail = ({ cocktail }) => {
  return (
    <div className="cocktail-container">
      <Markdown>{cocktail.content[0].text}</Markdown>
    </div>
  );
};

export default Cocktail;
