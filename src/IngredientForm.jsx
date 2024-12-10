import React from "react";
import IngredientList from "./IngredientList";
import Cocktail from "./Cocktail";
import GetCocktail from "./GetCocktail";
import { getCocktailFromClaude } from "./ai";

const IngredientForm = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [ingredientData, setIngredientData] = React.useState([]);
  const [cocktail, setCocktail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getCocktail = async () => {
    setIsLoading(true);
    const cocktailMarkdown = await getCocktailFromClaude(ingredientData);
    if (!!cocktailMarkdown?.error) {
      setError(true);
    } else {
      setCocktail(cocktailMarkdown);
    }
    setIsLoading(false);
  };
  const handleChange = (e) => {
    setIngredients(e.target.value);
  };

  const format = (ingredients) => {
    // if it's a comma separated string, split it into an array
    if (ingredients.includes(",")) {
      const cleanedIngredients = ingredients
        .split(",")
        .map((item) => item.trim());
      const filteredIngredients = cleanedIngredients.filter(
        (item) => item !== ""
      );
      return filteredIngredients;
    }
    return [ingredients];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedIngredients = format(ingredients);
    setIngredientData((prevIngredients) => [
      ...prevIngredients,
      ...formattedIngredients,
    ]);
    setIngredients("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="ingredient-form">
        <input
          id="ingredients"
          placeholder="e.g. Basil"
          type="text"
          value={ingredients}
          onChange={handleChange}
        />
        <button type="submit">Add ingredient(s)</button>
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
