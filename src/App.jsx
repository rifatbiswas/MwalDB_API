import { Route, Routes } from 'react-router-dom'
import './App.css'

import Meal from './components/Meal'
import RacipeInfo from './components/RacipeInfo'


function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Meal/>}/>
        <Route path='/:MealId' element={<RacipeInfo/>}/>
      </Routes>
      
    </>
  )
}

export default App
