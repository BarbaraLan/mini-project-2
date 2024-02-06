import RecipesJson from './src/recipes.json'

function RecipesList() {

const [recipes, setRecipes] = useState (RecipesData)

function deleteCard(recipeId){ 
const newRecipesArray = recipes.filter((recipes) => {
return recipeId !== recipes.id
});
}
}

setRecipes(newRecipesArray) ;

return (
<>
<ul className = 'cards-container'> 
{
recipes.map((recipes) => {
return 

}




  </ul>

</>

)






/* function RecipesList(props) {
    const bookRecipes = props.recipe;

    function displayRecipes(recipe) {
        /*   if (movie.hasOscars) {
              return '🏆'
          } else {
              return '💩'
          } 

        return calories ? '🏆' : '💩' Ternary operator, is not necessary to create a function for a single line

    }
} */