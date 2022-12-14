import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { Home } from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scroller from './components/scroller/Scroller';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>

    <Footer />
    <Scroller />
    </>
  )
}

export default App;