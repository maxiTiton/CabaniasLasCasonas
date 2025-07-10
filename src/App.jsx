import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Cabins from './components/Cabins';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    const galleryEls = document.querySelectorAll('.gallery-fade-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13 }
    );

    revealEls.forEach(el => observer.observe(el));
    galleryEls.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

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
