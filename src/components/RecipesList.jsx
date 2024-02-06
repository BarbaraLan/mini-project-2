import RecipesJson from '../recipes.json'
import { useState } from 'react';
import RecipesCard from './RecipesCard.jsx'

function RecipesList() {

    const [recipes, setRecipes] = useState(RecipesJson)

    function deleteCard(recipeId) {
        const newRecipesArray = recipes.filter((recipes) => {
            return recipeId !== recipes.id
        });
        setRecipes(newRecipesArray);
    }


return (
    <ul className='cards-container'>

        {
            recipes.map((recipe) => {
                return <RecipesCard key = {recipe.id} recipe = {recipe} deleteCard = {deleteCard} /> 


            })
        }
    </ul>
)
    }

export default RecipesList
