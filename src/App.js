import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Footer />
    </Router>
  )
}

export default App;