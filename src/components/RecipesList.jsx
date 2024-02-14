
import { useState } from 'react';
import RecipesCard from './RecipesCard.jsx'
import './RecipesList.css'

function RecipesList(props) {

    function deleteCard(recipeId) {
        const newRecipesArray = props.recipes.filter((recipe) => {
            return recipeId !== recipe.id
        });
        props.setRecipes(newRecipesArray);

    }

    return (
        <>
            <h3>Recipes List</h3>
            <ul className='recipes-container'>

                {
                    props.recipes.map((recipe) => {
                        return <RecipesCard  key={recipe.id} recipe={recipe} deleteCard ={deleteCard} />
                    })
                }
            </ul>
        </>
    )
}

export default RecipesList
