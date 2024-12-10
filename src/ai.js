import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

const getCocktailFromClaude = async (ingredients) => {
  const INGREDIENTS_STR = ingredients.join(", ");

  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1000,
    temperature: 0,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `You are a skilled mixologist tasked with creating a unique cocktail recipe using a provided list of ingredients. Your goal is to craft a delicious and balanced drink that showcases these ingredients:${INGREDIENTS_STR}. Create a detailed cocktail recipe. Your recipe should include: 1. A creative name for the cocktail 2. Precise measurements for each ingredient (use ounces, ml, or parts) 3. Step-by-step instructions for preparing the cocktail Additionally, suggest a suitable glass for serving the cocktail and recommend an appropriate garnish that complements the drink's flavors and presentation. Present your cocktail recipe as markdown.If you feel that a small amount of a common ingredient (such as simple syrup, citrus juice, or bitters) would greatly enhance the cocktail, you may include it, but the focus should remain on the provided ingredients. Format your response in markdown to make it easier to render to a web page.`,
          },
        ],
      },
    ],
  });
  return response;
};

export { getCocktailFromClaude };
