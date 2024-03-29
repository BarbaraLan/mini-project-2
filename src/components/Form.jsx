import { useState } from "react";
import './Forms.css'

function Form(props) {
    const [recipeName, setRecipeName] = useState("");
    const [recipeCalories, setRecipeCalories] = useState("");
    const [recipeImage, setRecipeImage] = useState("");
    const [recipeServings, setRecipeServings] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        const newRecipe = { name: recipeName, image: recipeImage, calories: recipeCalories, servings: recipeServings, id: Math.floor(Math.random()*200 )};

        props.setRecipes([newRecipe, ...props.recipes])
        setRecipeName("")
        setRecipeCalories("")
        setRecipeImage("")
        setRecipeServings("")

    };
    return (
        <div className="form-container">
            <form className= 'addArea' onSubmit={handleSubmit}>
                <span>Add a Recipe</span>
                <div>

                    <label >
                        Recipe Name
                        <input value={recipeName} onChange={(event) => { setRecipeName(event.target.value) }} id="setRecipeName" type="text" />
                    </label>

                    <label>
                        Recipe Calories
                        <input value={recipeCalories} onChange={(event) => { setRecipeCalories(event.target.value) }} id="setRecipeCalories" type="number" />
                    </label>

                    <label>
                        Recipe Image
                        <input value={recipeImage} onChange={(event) => { setRecipeImage(event.target.value) }} id="setRecipeImage" type="url" />
                    </label>

                    <label>
                        Servings
                        <input value={recipeServings} onChange={(event) => { setRecipeServings(event.target.value) }} id="setRecipeServings" type="number" />
                    </label>
                </div>

                <button className= 'addNewButton' type="submit">Add Recipe</button>


            </form>
            </div>
    )

}

export default Form