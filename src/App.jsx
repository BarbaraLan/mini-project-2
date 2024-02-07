import './App.css'
import { Routes, Route, Router } from 'react-router-dom'
import DashboardPage from './Pages/DashboardPage'
import AboutPage from './Pages/AboutPage'
import NotFoundPage from './Pages/NotFoundPage'
import ItemsDetailsPage from './Pages/ItemsDetailsPage'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <NavBar />
      <Sidebar/>
      <Routes>
        <Route path='/' element={<DashboardPage userName='DashboardPage' />} />
        <Route path='/about' element={<AboutPage userName='AboutPage' />} />
        <Route path='/itemsDetailsPage/:recipeId' element={<ItemsDetailsPage userName='RecipesList' />} />
        <Route path='*' element={<NotFoundPage userName='NotFoundPage' />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
