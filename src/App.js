import React from 'react';
import './App.css';
import './styles/Navbar.css'
import Navbar from './components/Navbar';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu'
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
         <Route path='/' exact element={<Home />} ></Route>
         <Route path='/menu' exact element={<Menu/>}></Route>
         <Route path='/about' exact element={<About/>}></Route>
         <Route path='/contact' exact element={<Contact/>}></Route>
         
         
         </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
