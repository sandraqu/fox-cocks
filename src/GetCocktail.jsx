const GetCocktail = ({ getCocktail, isLoading }) => {
  return (
    <div className="get-cocktail-container">
      <p>Get a cocktail recipe with Claude</p>
      <button onClick={getCocktail}>
        {isLoading ? "Loading..." : "Get cocktail"}
      </button>
    </div>
  );
};

export default GetCocktail;
