import React, { useState, useEffect, useRef } from 'react'
import './Cabins.css'
import fachada1 from '../assets/fachada1.jpg'
import fachada2 from '../assets/fachada2.jpg'
import fachada3 from '../assets/fachada3.jpg'
import fachada4 from '../assets/fachada4.jpg'
import cochera from '../assets/cochera.jpg'
import cochera2 from '../assets/cochera2.jpg'
import camasGrande from '../assets/camasGrande.jpg'
import puerta from '../assets/puerta.jpg'
import habitacionArriba from '../assets/habitacionArriba.jpg'
import habitacionChica from '../assets/habitacionChica.jpg'
import hogar from '../assets/hogar.jpg'
import balcon from '../assets/balcon.jpg'
import camaMatrimonial from '../assets/camaMatrimonial.jpg'
import cama from '../assets/cama.jpg'
import baño3 from '../assets/baño3.jpg'
import comedor from '../assets/comedor.jpg'

const Cabins = () => {
  const [activeCabin, setActiveCabin] = useState(0)
  const [isLoading, setIsLoading] = useState({ reservar: false, verFotos: false })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  const cabins = [
    {
      id: 1,
      name: "Casona Grande",
      type: "Familiar",
      capacity: "6 personas",
      price: "6 personas",
      description: "Ideal para familias grandes. Amplia y cómoda con múltiples habitaciones y balcón con vista al parque.",
      amenities: [
        { text: "WiFi", icon: "fa-solid fa-wifi" },
        { text: "Cofres de seguridad", icon: "fa-solid fa-vault" },
        { text: "Parrilla con juego de jardín", icon: "fa-solid fa-drumstick-bite" },
        { text: "Hogar a leñas en living", icon: "fa-solid fa-fire" },
        { text: "Cocina Equipada", icon: "fa-solid fa-utensils" },
        { text: "Galería-cochera individual", icon: "fa-solid fa-car" },
        { text: "Calefactores en cada ambiente", icon: "fa-solid fa-thermometer-half" },
        { text: "Ropa blanca", icon: "fa-solid fa-bed" }
      ],
      image: fachada2
    },
    {
      id: 2,
      name: "Casona Chica",
      type: "Familiar",
      capacity: "5 personas",
      price: "5 personas",
      description: "Perfecta para familias medianas. Con amplios espacios y confortable.",
      amenities: [
        { text: "WiFi", icon: "fa-solid fa-wifi" },
        { text: "Cofres de seguridad", icon: "fa-solid fa-vault" },
        { text: "Parrilla con juego de jardín", icon: "fa-solid fa-drumstick-bite" },
        { text: "Hogar a leñas en living", icon: "fa-solid fa-fire" },
        { text: "Cocina Equipada", icon: "fa-solid fa-utensils" },
        { text: "Galería-cochera individual", icon: "fa-solid fa-car" },
        { text: "Calefactores en cada ambiente", icon: "fa-solid fa-thermometer-half" },
        { text: "Ropa blanca", icon: "fa-solid fa-bed" }
      ],
      image: fachada1
    }
  ]

  // Arrays de imágenes para cada cabaña
  const cabinImages = {
    0: [fachada1, cochera, fachada3, camasGrande, fachada4, puerta, habitacionArriba, hogar, balcon, camaMatrimonial], // Casona Grande
    1: [fachada2, cochera2, habitacionChica, cama, baño3, comedor] // Casona Chica
  }

  // Intersection Observer to detect if Cabins is in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Rotación automática de imágenes SOLO si está en vista
  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setIsSliding(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          const images = cabinImages[activeCabin]
          return (prevIndex + 1) % images.length
        })
        setIsSliding(false)
      }, 1500)
    }, 5000)
    return () => clearInterval(interval)
  }, [activeCabin, isInView])

  useEffect(() => {
    setIsLoading({ reservar: false, verFotos: false })
    setCurrentImageIndex(0)
  }, [activeCabin])

  const handleReservar = () => {
    setIsLoading((prev) => ({ ...prev, reservar: true }))
    // Scroll to contact section
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    // Reset loading after scroll animation
    setTimeout(() => setIsLoading((prev) => ({ ...prev, reservar: false })), 1000)
  }

  const handleVerFotos = () => {
    setIsLoading((prev) => ({ ...prev, verFotos: true }))
    // Scroll to gallery section
    const gallerySection = document.getElementById('galeria')
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' })
    }
    // Reset loading after scroll animation
    setTimeout(() => setIsLoading((prev) => ({ ...prev, verFotos: false })), 1000)
  }

  return (
    <section id="cabanas" className="section cabins reveal-on-scroll fade-up" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nuestras Cabañas</h2>
        <p className="section-subtitle">
          Descubrí el alojamiento perfecto para tu escapada
        </p>
        
        <div className="cabins-tabs">
          {cabins.map((cabin, index) => (
            <button
              key={cabin.id}
              className={`cabin-tab ${activeCabin === index ? 'active' : ''}`}
              onClick={() => setActiveCabin(index)}
            >
              <div className="tab-info">
                <h4>{cabin.name}</h4>
              </div>
            </button>
          ))}
        </div>
        
        <div className="cabin-details">
          <div className="cabin-left">
            <div className="cabin-image">
              <div className={`image-container ${isSliding ? 'sliding' : ''}`}>
                <img 
                  src={cabinImages[activeCabin][currentImageIndex]} 
                  alt={`${cabins[activeCabin].name} - Imagen ${currentImageIndex + 1}`} 
                  className="cabin-image-real current-image"
                />
                <img 
                  src={cabinImages[activeCabin][(currentImageIndex + 1) % cabinImages[activeCabin].length]} 
                  alt={`${cabins[activeCabin].name} - Imagen ${((currentImageIndex + 1) % cabinImages[activeCabin].length) + 1}`} 
                  className="cabin-image-real next-image"
                />
              </div>
            </div>
            
            <div className="cabin-actions">
              <button 
                className="btn" 
                onClick={handleReservar}
                disabled={isLoading.reservar}
              >
                {isLoading.reservar ? 'Navegando...' : 'Reservar Ahora'}
              </button>
              <button 
                className="btn btn-outline" 
                onClick={handleVerFotos}
                disabled={isLoading.verFotos}
              >
                {isLoading.verFotos ? 'Navegando...' : 'Ver Más Fotos'}
              </button>
            </div>
          </div>
          
          <div className="cabin-info">
            <div className="cabin-header">
              <h3>{cabins[activeCabin].name}</h3>
              <div className="cabin-meta">
                <span className="cabin-type">{cabins[activeCabin].type}</span>
                <span className="cabin-capacity">{cabins[activeCabin].capacity}</span>
              </div>
            </div>
            
            <p className="cabin-description">
              {cabins[activeCabin].description}
            </p>
            
            <div className="cabin-amenities">
              <h4>Comodidades incluidas:</h4>
              <div className="amenities-grid">
                {cabins[activeCabin].amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <i className={`amenity-icon ${amenity.icon}`}></i>
                    <span>{amenity.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cabins 