import { Link } from "react-router-dom";

function RecipesCard(props) {
    const recipe = props.recipe;

    return (
        <li className="recipe-card">
              <h4><Link to={`/itemsDetailsPage/${recipe.id}`}>{recipe.name}</Link></h4>
            <button className="btn" onClick={() => props.deleteCard(recipe.id) } > X </button> 
        </li>
    )
}
export default RecipesCard
