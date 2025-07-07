import React from 'react'
import './Hero.css'
import heroImage from '../assets/frente.jpg'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Cabañas Las Casonas
          </h1>
          <p className="hero-subtitle">
            Una experiencia única en las sierras de Córdoba
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn"
              onClick={() => scrollToSection('cabanas')}
            >
              Ver Cabañas
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('contacto')}
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero 