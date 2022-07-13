import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-portfolio" element={<Layout />}>
          <Route path="/react-portfolio" index element={<Home />} />
          <Route path="/react-portfolio/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
