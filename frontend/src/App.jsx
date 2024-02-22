import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Createuser from './pages/Createuser.jsx'
import Updateuser from './pages/Updateuser.jsx'


const App = () => {
  return (
    
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route path='/create' element={<Createuser/>}/>
      <Route path ='/update/:id' element ={<Updateuser/>}/>
      

    </Routes>


  )
}

export default App