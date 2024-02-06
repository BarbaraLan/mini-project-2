import './App.css'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RecipesList from './components/RecipesList'
import RecipiesCard from './components/RecipesCard'

function App() {

  return (
    <>
      <HomePage />
      <NavBar />
      <Footer />
      <RecipesList />
      <RecipiesCard />
    </>
  )
}

export default App
