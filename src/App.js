import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { Home } from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home />
      <About />
      <Portfolio />
    </main>
    </>
  )
}

export default App;