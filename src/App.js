import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/pages/NavBar';
import Fooditems from './components/pages/FoodItems';
import Orders from './components/pages/Orders';
import CheckOut from './components/pages/CheckOut';
import './App.css';

function App() {
  const [screenWidth, setScreenWidth] = useState()
  const location = useLocation()
  const navigate = useNavigate()

  const handleScreenWidth = () => {
    window.innerWidth >= 770 ? setScreenWidth(true) : setScreenWidth(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth)
    return () => window.removeEventListener('resize', handleScreenWidth)
  }, [screenWidth])

  useEffect(() => {

    (screenWidth && location.pathname === '/orders') && navigate('/')

  }, [screenWidth,location.pathname,navigate])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Fooditems />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
