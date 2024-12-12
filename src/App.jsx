import { useState } from 'react'
import { Link, Routes, Route, useParams } from 'react-router-dom'
import AddNewItem from './Components/AddNewItem'
import Home from './Components/Home'
import Details from './Components/Details'

function App() {

  return (
    <>
      

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/addnewitem" element={<AddNewItem />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>

      
    </>
  )
}

export default App
