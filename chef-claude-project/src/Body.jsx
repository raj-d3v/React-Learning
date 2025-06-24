import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { getRecipeFromMistral } from "./ai";

function Body() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [recipeShown, setRecipeShown] = useState(false);

  const ingredientElements = ingredients.map((ingredient) => (
    <p key={ingredient}>{ingredient}</p>
  ));

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim() !== "") {
      setIngredients((prev) => [...prev, newIngredient.trim()]);
    }
  }

  async function handleGetRecipe() {
    const recipeText = await getRecipeFromMistral(ingredients);
    if (recipeText) {
      setRecipe(recipeText);
      setRecipeShown(true);
    } else {
      setRecipe("Sorry, no recipe was returned. Please try again.");
      setRecipeShown(true);
    }
  }

  return (
    <>
      <article className="landing-content">
        <p>
          Welcome to <strong>Chef Claude</strong> — your personal digital chef!
          Discover a world of mouth-watering recipes, smart cooking tips, and
          step-by-step instructions designed to make every meal a masterpiece.
        </p>
        <div className="scroll-down">
          <span>Scroll down to start cooking</span>
          <p className="arrow">&#8595;</p>
        </div>
      </article>

      <section className="main-content">
        <form action={addIngredients} className="ingredients-form">
          <input
            className="ingredients-input"
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button className="ingredients-submit">Add ingredient</button>
        </form>
      </section>

      {ingredients.length > 0 && (
        <section className="display-ingredients">
          <h4>Ingredients on hand:</h4>
          {ingredientElements}

          {ingredients.length > 3 && (
            <div className="get-recipe">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={handleGetRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
      )}

      {recipeShown && (
        <section className="recipe-output">
          <h2>Chef Claude Recommends:</h2>
          <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
      )}
    </>
  );
}

export default Body;
