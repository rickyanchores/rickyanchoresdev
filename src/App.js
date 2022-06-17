import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route component={Home} />   
      </Routes>
      <Home />
      <Banner />
      <Footer />
    </Router>
  )
}

export default App;