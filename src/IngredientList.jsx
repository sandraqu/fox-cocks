import React from "react";
const IngredientList = ({ ingredients }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <li key={index + "-" + ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
};

export default IngredientList;
