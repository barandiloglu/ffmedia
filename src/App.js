import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Projects from './pages/Projects';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/why-us' element={<WhyUs />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}


export default App;
