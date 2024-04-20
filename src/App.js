import React, { useEffect } from 'react';
import './App.css'

import Navbar from './Navbar';
import Footer from './Footer';

import HomePage from './pages/HomePage';
function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
