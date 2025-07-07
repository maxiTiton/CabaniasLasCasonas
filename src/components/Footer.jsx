import React, { useEffect, useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setShowScrollTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer reveal-on-scroll">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>Cabañas Las Casonas | &copy; 2025 Todos los derechos reservados</p>
          </div>
        </div>
      </div>
      
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
      >
        ↑
      </button>
    </footer>
  )
}

export default Footer 