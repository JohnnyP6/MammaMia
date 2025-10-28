import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="container my-4">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App
