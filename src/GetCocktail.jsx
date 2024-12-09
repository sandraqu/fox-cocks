const GetCocktail = ({ getCocktail, isLoading }) => {
  return (
    <div className="get-cocktail-container">
      <p>Get a cocktail recipe with Claude</p>
      <button onClick={getCocktail}>
        {isLoading ? "Loading..." : "Generate cocktail"}
      </button>
    </div>
  );
};

export default GetCocktail;
