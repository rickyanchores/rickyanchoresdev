import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Badges from './components/Badges/Badges';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';
//import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';

import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

//IMPORT AOS

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Form from './pages/Form/Form';
// ..
AOS.init();

const App = () => {
  return (
    <Router>

      <Nav />
      <Routes>
        <Route component={Home} />   
      </Routes>
      <Home />
      <Badges />
      <Projects />
      <About />
      <Form />
      <Banner />
      <Footer />
    </Router>
  )
}

export default App;