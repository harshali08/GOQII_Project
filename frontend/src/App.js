import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Edit from './Pages/Edit'
import Read from './Pages/Read'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/view/:id' element={<Read/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
