import { useState } from 'react'
import './App.css'
import NavbarComponent from './Components/NavbarComponent';
import NavbarHome from './Components/NavbarHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Discover from './Components/Discover';
import StockPage from './Components/StockPage';
import Profile from './Components/Profile';
import InvestmentPage from './Components/InvestmentPage';



function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      { loggedIn? <NavbarComponent />: <NavbarHome /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/details" element={<Profile />} />
        <Route path="/user/portfolio" element={<Profile />} />
        <Route path="/user/addWallet" element={<Profile />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/:id" element={<StockPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/invest" element={<InvestmentPage />} />
        <Route path="/invest/results" element={<InvestmentPage />} />
      </Routes>
    </>
  )
}

export default App
