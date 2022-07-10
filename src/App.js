// Imports App sass file
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  )
}

export default App
