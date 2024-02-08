import RecipesList from "../components/RecipesList"
import { useState } from "react";
import RecipesJson from '../recipes.json'

function DashboardPage() {


    const [recipes, setRecipes] = useState(RecipesJson)
    const [recipeName, setRecipeName] = useState("");
    const [recipeCalories, setRecipeCalories] = useState("");
    const [recipeImage, setRecipeImage] = useState("");
    const [recipeServings, setRecipeServings] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        const newRecipe = { name: recipeName, image: recipeImage, calories: recipeCalories, servings: recipeServings };

        setRecipes([newRecipe, ...recipes])
        setRecipeName("")
        setRecipeCalories("")
        setRecipeImage("")
        setServings("")

    };

    return (
        <>
            < h1 > REACT RECIPES FOR DUMMIES </h1 >
            <img className="image1" src="./src/assets/coveringImg.webp" alt="" />

            <RecipesList recipes={recipes} />

            <form onSubmit={handleSubmit}>
                <span>Add a Recipe</span>
                <div>
                 
                    <label>
                        set Recipe Name
                        <input value={recipeName} onChange={(event) => { setRecipeName(event.target.value) }} id="setRecipeName" type="text" />
                    </label>

                    <label>
                        set Recipe Calories
                        <input value={recipeCalories} onChange={(event) => { setRecipeCalories(event.target.value) }} id="setRecipeCalories" type="number" />
                    </label>

                    <label>
                        set Recipe Image
                        <input value={recipeImage} onChange={(event) => { setRecipeImage(event.target.value) }} id="setRecipeImage" type="url" />
                    </label>

                    <label>
                        set Servings
                        <input value={recipeServings} onChange={(event) => { setRecipeServings(event.target.value) }} id="setRecipeServings" type="number" />
                    </label>
                </div>

                <button type="submit">Add Recipe</button>


            </form>


        </>

    )
}

export default DashboardPage
