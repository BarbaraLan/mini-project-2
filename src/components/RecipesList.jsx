import RecipesJson from '../recipes.json'
import { useState } from 'react';
import RecipesCard from './RecipesCard.jsx'
import './RecipesList.css'

function RecipesList() {

    const [recipes, setRecipes] = useState(RecipesJson)

    function deleteCard(recipeId) {
        const newRecipesArray = recipes.filter((recipe) => {
            return recipeId !== recipe.id
        });
        setRecipes(newRecipesArray);

    }

    return (
        <>
            <h3>Recipes List</h3>
            <ul className='recipes-container'>

                {
                    recipes.map((recipe) => {
                        return <RecipesCard key={recipe.id} recipe={recipe} deleteCard ={deleteCard} />
                    })
                }
            </ul>
        </>
    )
}

export default RecipesList
