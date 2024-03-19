import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {HomePage} from "./pages/HomePage/HomePage"
import {LoginPage} from "./pages/LoginPage/LoginPage"
import { RegisterPage } from './pages/RegisterPage/RegisterPage'


function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='*' element={<h1>Page not Found</h1>}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
