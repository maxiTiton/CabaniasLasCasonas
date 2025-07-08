import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Animación global de aparición al hacer scroll
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    const galleryEls = document.querySelectorAll('.gallery-fade-in');
    const observer = new window.IntersectionObserver(
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
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
