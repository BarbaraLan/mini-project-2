import { Link } from "react-router-dom";
import './recipeCard.css'

function RecipesCard(props) {
    const recipe = props.recipe;

    return (
        <li className="recipe-card">
            <Link class="link1" to={`/edit/${recipe.id}`}> edit </Link>
              <h4><Link to={`/itemsDetailsPage/${recipe.id}`}>{recipe.name}</Link></h4>
            <button className="btn" onClick={() => props.deleteCard(recipe.id) } > X </button> 
        </li>
    )
}
export default RecipesCard
