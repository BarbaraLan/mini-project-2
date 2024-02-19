import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../components/EditPage.css'


function EditPage(props) {

    const { recipeId } = useParams()
    const recipes = props.recipes;
    const setRecipes = props.setRecipes;
    const recipe = recipes.find((recipe) => recipe.id === recipeId);
    const navigate = useNavigate()
    const initialCaloriesCount = recipe.calories >= 350 ? 'High calorie content ' : 'Low Calorie content';

    const [name, setName] = useState(recipe.name);
    const [calories, setCalories] = useState(recipe.calories);
    const [image, setImage] = useState(recipe.image);
    const [servings, setServings] = useState(recipe.servings);
    const [caloriesCount, setCaloriesCount] = useState(initialCaloriesCount);

    const handleSubmit = (event) => {
        event.preventDefault();
        const arrayCopy = [...recipes];
        const newRecipe = {
            id,
            name,
            calories,
            image,
            servings,
            caloriesCount
        };

        const index = arrayCopy.indexOf(recipe);

        arrayCopy[index] = newRecipe;

        setRecipes(arrayCopy);
        navigate("/")
    }

    return (
        <>
          
          <form className='editPage' onSubmit={handleSubmit}>
    <ul>
        <li>
            <label>
                <br></br>
                Name:        
                <input value={name} onChange={(event) => setName(event.target.value)} type="text" />
            </label>
        </li>
        <li>
            <label>
                Calories:
                <input value={calories} onChange={(event) => setCalories(event.target.value)} type="text" />
            </label>
        </li>
        <li>
            <label>
                Reference Image:
                <input value={image} onChange={(event) => setImage(event.target.value)} type="url" />
            </label>
        </li>
        <li>
            <label>
                Servings:
                <input value={servings} onChange={(event) => setServings(event.target.value)} type="number" />
            </label>
        </li>
        <li>
            <label>
                Calories Count:
                <input value={caloriesCount} onChange={(event) => setCaloriesCount(event.target.value)} type="number" />
            </label>
        </li>
    </ul>

    <button type="submit">Edit recipe</button>
</form>

        </>

    )
}

export default EditPage