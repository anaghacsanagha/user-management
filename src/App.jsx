import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"

import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Dashboard from "./Pages/Dashboard"
import UserDashboard from "./Pages/UserDetails"
import Pnf from "./Pages/Pnf"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/user/:id" element={<UserDashboard />} />

          <Route path="*" element={<Pnf />} />

        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App