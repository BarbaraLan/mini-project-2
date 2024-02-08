import RecipesList from "../components/RecipesList"
import Form from "../components/Form"
import { useState } from "react"
import RecipesJson from '../recipes.json'

function DashboardPage() {

    const [recipes, setRecipes] = useState(RecipesJson)

    return (
        <>
            < h1 > REACT RECIPES FOR DUMMIES </h1 >
            <img className="image1" src="./src/assets/coveringImg.webp" alt="" />

            <RecipesList recipes={recipes} />
            <Form recipes={recipes} setRecipes={setRecipes}/>
        </>

    )
}

export default DashboardPage
