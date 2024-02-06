function RecipesCard(props) {
    const recipe = props.recipe;
    const caloriesCount = recipe.calories >= 350 ? 'High calorie content ' : 'Low Calorie content'

    function displayCalories(calorie) {
        return caloriesCount
    }

    return (
        <li className="recipe-card" key={recipe.id}>
            <p>{recipe.name}</p>
            <p>{recipe.calories}</p>
            <p>{recipe.image}</p>
            <p>{recipe.servings}</p>
            {caloriesCount}
            <button class="btn" onClick={() => props.deleteCard(recipe.id) } > X </button> 
        </li>
    )
}
export default RecipesCard
