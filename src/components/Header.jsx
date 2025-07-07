import React, { useState, useEffect } from 'react'
import './Header.css'
import logo from '../assets/logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Cabañas Las Casonas" className="logo-image" />
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
              <li><button onClick={() => scrollToSection('nosotros')}>Nosotros</button></li>
              <li><button onClick={() => scrollToSection('cabanas')}>Cabañas</button></li>
              <li><button onClick={() => scrollToSection('galeria')}>Galería</button></li>
              <li><button onClick={() => scrollToSection('contacto')}>Contacto</button></li>
              <li><button onClick={() => scrollToSection('ubicacion')}>Ubicación</button></li>
            </ul>
          </nav>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 