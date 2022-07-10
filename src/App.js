import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import './App.scss'

function App() {
  return (
    <Routes>
      <Route exact path="/react-portfolio" element={<Layout />}>
        <Route exact path="/react-portfolio" element={<Home />} />
        <Route exact path="/react-portfolio/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
