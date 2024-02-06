import { useState } from "react";

function RecipesCard(props) {
const recipe = props.recipe;

function displayCalories (recipe) {
    return recipe.calories >= 350 ? 'High calorie content ' : 'Low Calorie content'
}


}