import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './component/Navbar/Navbar.jsx'
import Sign_Up from './component/Sign_Up/Sign_Up.jsx'
import Login from './component/Login/Login.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/logaccount" element={<Login />} />
        </Routes>

      </Router>
    </>
  )
}

export default App