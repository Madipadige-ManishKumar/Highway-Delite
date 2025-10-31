import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PlaceDetails from './Pages/PlaceDetails'

const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/place/:id' element={<PlaceDetails/>} />
    // </Routes>
    <PlaceDetails />
  )
}

export default App