import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

const App = () => {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route component={Home} />   
      </Routes>
      <Home />
      <Projects />
      <About />
      <Banner />
      <Footer />
    </Router>
  )
}

export default App;