function RecipesCard(props) {
const recipe = props.recipe;
    return recipe.calories >= 350 ? 'High calorie content ' : 'Low Calorie content'
}
export default RecipesCard
