import RecipesJson from './src/recipes.json'

function RecipesList() {

    const [recipes, setRecipes] = useState(RecipesData)

    function deleteCard(recipeId) {
        const newRecipesArray = recipes.filter((recipes) => {
            return recipeId !== recipes.id
        });
    }

setRecipes(newRecipesArray);

return (
    <ul className='cards-container'>

        {
            recipes.map((recipes) => {
                return

            })
        }
    </ul>
)
    }

export default RecipesList
