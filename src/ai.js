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
            text: `You are a skilled mixologist tasked with creating a unique cocktail recipe using a provided list of ingredients. Your goal is to craft a delicious and balanced drink that showcases these ingredients in an innovative way.\n\nHere is the list of ingredients you must use in your cocktail:\n\n<ingredients>\n${INGREDIENTS_STR}\n</ingredients>\n\nUsing these ingredients, create a detailed cocktail recipe. Your recipe should include:\n\n1. A creative name for the cocktail\n2. Precise measurements for each ingredient (use ounces, ml, or parts)\n3. Step-by-step instructions for preparing the cocktail\n\nAdditionally, suggest a suitable glass for serving the cocktail and recommend an appropriate garnish that complements the drink's flavors and presentation.\n\nPresent your cocktail recipe as markdown.Be creative and thoughtful in your recipe creation, ensuring that the flavors of the provided ingredients work well together. If you feel that a small amount of a common ingredient (such as simple syrup, citrus juice, or bitters) would greatly enhance the cocktail, you may include it, but the focus should remain on the provided ingredients. Format your response in markdown to make it easier to render to a web page.`,
          },
        ],
      },
    ],
  });
  return response;
};

export { getCocktailFromClaude };
