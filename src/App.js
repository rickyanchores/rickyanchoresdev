import React from 'react'
import Nav from './components/Nav/Nav';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <h1>Ricky Portfolio v3.0</h1>
      <Home />
      <Footer />
    </div>
  )
}

export default App;