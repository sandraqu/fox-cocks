import React from "react";
import IngredientList from "./IngredientList";
import Cocktail from "./Cocktail";
import GetCocktail from "./GetCocktail";
import { getCocktailFromClaude } from "./ai";

const IngredientForm = () => {
  const [ingredient, setIngredient] = React.useState([]);
  const [ingredientData, setIngredientData] = React.useState([]);
  const [cocktail, setCocktail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getCocktail = async () => {
    setIsLoading(true);
    const cocktailMarkdown = await getCocktailFromClaude(ingredientData);
    console.log("cocktailMarkdown", cocktailMarkdown);
    if (typeof cocktailMarkdown === "object") {
      setError(true);
    } else {
      setCocktail(cocktailMarkdown);
    }
    setIsLoading(false);
  };
  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIngredientData((prevIngredients) => [...prevIngredients, ingredient]);
    setIngredient("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="ingredient-form">
        <input
          id="ingredient"
          placeholder="e.g. Basil"
          type="text"
          value={ingredient}
          onChange={handleChange}
        />
        <button type="submit">Add ingredient</button>
      </form>
      <IngredientList ingredients={ingredientData} />
      {ingredientData.length > 0 && (
        <GetCocktail getCocktail={getCocktail} isLoading={isLoading} />
      )}
      {cocktail && <Cocktail cocktail={cocktail} />}
      {error && <p>Claude is too busy at this time.</p>}
    </>
  );
};

export default IngredientForm;
