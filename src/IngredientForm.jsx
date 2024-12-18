import React, { useEffect } from "react";
import Cocktail from "./Cocktail";
import { getCocktailFromClaude } from "./ai";
import Loader from "./Loader";

const IngredientForm = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [ingredientData, setIngredientData] = React.useState([]);
  const [cocktail, setCocktail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getCocktail = async (ingredientData) => {
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
    const { value } = e.target;
    e.preventDefault();
    setIngredients(value);
  };

  const format = (ingredients) => {
    // If ingredients is an empty array, return an empty array
    if (ingredients.length === 0) {
      return [];
    }

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

    getCocktail(ingredientData);
  };

  useEffect(() => {
    const formattedIngredients = format(ingredients);
    setIngredientData((prevIngredients) => [
      ...prevIngredients,
      ...formattedIngredients,
    ]);
  }, [ingredients]);
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col ingredient-form">
        <input
          name="ingredients"
          id="ingredients"
          placeholder="e.g. mint, champagne, rose buds"
          type="text"
          value={ingredients}
          onChange={handleChange}
        />
        {isLoading ? <Loader /> : <button type="submit">Mix it up!</button>}
      </form>
      {cocktail && <Cocktail cocktail={cocktail} />}
      {error && <p>Claude is too busy at this time.</p>}
    </>
  );
};

export default IngredientForm;
