import recipesJson from '../recipes.json'
import { useParams } from "react-router-dom";

function ItemsDetailsPage (props) {

    const { recipeId } = useParams()
    const recipe = recipesJson.find((recipe) => recipe.id === recipeId);
    console.log(recipe);
    const caloriesCount = recipe.calories >= 350 ? 'High calorie content ' : 'Low Calorie content'
    function displayCalories(calorie) {
        return caloriesCount
    }
return (
    <li className="recipe-card-detail" key={recipe.id}>
    <p>{recipe.name}</p>
    <p>{recipe.calories}</p>
    <p>{recipe.image}</p>
    <p>{recipe.servings}</p>
    <p>{caloriesCount}</p>
    </li>
)
}

export default ItemsDetailsPage