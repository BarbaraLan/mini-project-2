import RecipesList from "../components/RecipesList"
import Form from "../components/Form"


function DashboardPage(props) {
    return (
        <>
            <img className="image1" src="./src/assets/image.png" alt="" />

            <RecipesList  recipes={props.recipes} setRecipes={props.setRecipes} />
            <Form recipes={props.recipes} setRecipes={props.setRecipes}/>
        </>

    )
}

export default DashboardPage
