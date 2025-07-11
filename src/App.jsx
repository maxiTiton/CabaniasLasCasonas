import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Cabins from './components/Cabins';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks';

function App() {
  useScrollAnimation();

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Cabins />
      <Gallery />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
