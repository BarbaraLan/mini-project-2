import './App.css'
import { Routes, Route, Router } from 'react-router-dom'
import DashboardPage from './Pages/DashboardPage'
import AboutPage from './Pages/AboutPage'
import NotFoundPage from './Pages/NotFoundPage'
import ItemsDetailsPage from './Pages/ItemsDetailsPage'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import EditPage from './Pages/EditPage'
import { useState } from "react"
import RecipesJson from './recipes.json'



function App() {
  const [recipes, setRecipes] = useState(RecipesJson)

  return (
    <>
      <NavBar />
      <Sidebar/>
      <Routes>
        <Route path='/' element={<DashboardPage userName='DashboardPage' recipes={recipes} setRecipes={setRecipes}/>} />
        <Route path='/about' element={<AboutPage userName='AboutPage' />} />
        <Route path='/itemsDetailsPage/:recipeId' element={<ItemsDetailsPage userName='RecipesList' />} />
        <Route path='/edit/:recipeId' element={<EditPage userName='EditPage' recipes={recipes} setRecipes={setRecipes}/>} /> 
        <Route path='*' element={<NotFoundPage userName='NotFoundPage' />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
