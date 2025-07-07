import React, { useState, useRef } from 'react'
import './Gallery.css'
import fachada1 from '../assets/fachada1.jpg'
import fachada2 from '../assets/fachada2.jpg'
import fachada3 from '../assets/fachada3.jpg'
import fachada4 from '../assets/fachada4.jpg'
import habitacionGrande from '../assets/habitacionGrande.jpg'
import habitacionChica from '../assets/habitacionChica.jpg'
import habitacionArriba from '../assets/habitacionArriba.jpg'
import cocina from '../assets/cocina.jpg'
import comedor from '../assets/comedor.jpg'
import baño from '../assets/baño.jpg'
import hogar from '../assets/hogar.jpg'
import balcon from '../assets/balcon.jpg'
import asador from '../assets/asador.jpg'
import cochera from '../assets/cochera.jpg'
import baños2 from '../assets/baños2.jpg'
import baños from '../assets/baños.jpg'
import ventanas from '../assets/ventanas.jpg'
import cochera2 from '../assets/cochera2.jpg'
import fachadaNoche2 from '../assets/fachadaNoche2.jpg'
import fachadaNoche from '../assets/fachadaNoche.jpg'
import cocheras from '../assets/cocheras.jpg'
import grande from '../assets/grande.jpg'
import habitacionArriba2 from '../assets/habitacionArriba2.jpg'
import puerta from '../assets/puerta.jpg'
import tele from '../assets/tele.jpg'
import cocina2 from '../assets/cocina2.jpg'
import comedor3 from '../assets/comedor3.jpg'
import cama2 from '../assets/cama2.jpg'
import cama from '../assets/cama.jpg'
import camasGrande from '../assets/camasGrande.jpg'
import cafe from '../assets/cafe.jpg'
import estante from '../assets/estante.jpg'
import luces from '../assets/luces.jpg'
import florero from '../assets/florero.jpg'
import baño7 from '../assets/baño7.jpg'
import camaMatrimonial from '../assets/camaMatrimonial.jpg'
import baño6 from '../assets/baño6.jpg'
import baño5 from '../assets/baño5.jpg'
import baño4 from '../assets/baño4.jpg'
import baño3 from '../assets/baño3.jpg'
import baño2 from '../assets/baño2.jpg'
import ducha from '../assets/ducha.jpg'
import comedor2 from '../assets/comedor2.jpg'
import frente from '../assets/frente.jpg'

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0)
  const [showFullImage, setShowFullImage] = useState(false)
  const lightboxRef = useRef(null)

  const images = [
    {
      id: 1,
      title: "Fachada Principal",
      description: "Vista frontal de nuestras cabañas con diseño rústico",
      category: "exterior",
      image: fachada1
    },
    {
      id: 2,
      title: "Habitación Principal",
      description: "Dormitorio espacioso con cama matrimonial y vista al bosque",
      category: "interior",
      image: habitacionGrande
    },
    {
      id: 3,
      title: "Cocina Equipada",
      description: "Cocina completa con todos los utensilios necesarios",
      category: "interior",
      image: cocina
    },
    {
      id: 4,
      title: "Sala de Estar",
      description: "Ambiente cálido y acogedor con chimenea",
      category: "interior",
      image: hogar
    },
    {
      id: 5,
      title: "Comedor",
      description: "Área de comedor con vista panorámica",
      category: "interior",
      image: comedor
    },
    {
      id: 6,
      title: "Baño Principal",
      description: "Baño completo con ducha y amenities",
      category: "interior",
      image: baño
    },
    {
      id: 7,
      title: "Balcón",
      description: "Terraza con vistas espectaculares de las montañas",
      category: "exterior",
      image: balcon
    },
    {
      id: 8,
      title: "Área de Parrilla",
      description: "Asador al aire libre para disfrutar al aire libre",
      category: "exterior",
      image: asador
    },
    {
      id: 9,
      title: "Estacionamiento",
      description: "Cochera cubierta para tu vehículo",
      category: "exterior",
      image: cochera
    },
    {
      id: 10,
      title: "Fachada Lateral",
      description: "Vista lateral de las cabañas en el entorno natural",
      category: "exterior",
      image: fachada2
    },
    {
      id: 11,
      title: "Habitación Superior",
      description: "Dormitorio en planta alta con ambiente íntimo",
      category: "interior",
      image: habitacionArriba
    },
    {
      id: 12,
      title: "Fachada Nocturna",
      description: "Iluminación cálida en las noches de montaña",
      category: "exterior",
      image: fachada3
    }
  ]

  const categories = [
    { id: 'some', name: 'Algunas' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'interior', name: 'Interior' },
    { id: 'all', name: 'Todas' }
  ]

  const [activeCategory, setActiveCategory] = useState('some')

  const allImages = [
    fachada1, fachada2, fachada3, fachada4, fachadaNoche, fachadaNoche2, frente, cocheras, cochera, cochera2, balcon, asador, comedor, comedor2, comedor3, cocina, cocina2, hogar, habitacionGrande, habitacionChica, habitacionArriba, habitacionArriba2, grande, cama, cama2, camasGrande, baño, baños, baños2, baño2, baño3, baño4, baño5, baño6, baño7, ducha, puerta, tele, ventanas, cafe, estante, florero
  ]
  const filteredImages = activeCategory === 'all'
    ? allImages.map((img, i) => ({
        id: i + 1,
        title: `Foto ${i + 1}`,
        description: '',
        image: img
      }))
    : activeCategory === 'some'
      ? images
      : images.filter(img => img.category === activeCategory)

  const handleImageClick = (index) => {
    setActiveImage(index)
    // Hacer scroll suave hasta el carrusel
    setTimeout(() => {
      lightboxRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }, 100)
  }

  const openFullImage = () => {
    setShowFullImage(true)
  }

  const closeFullImage = () => {
    setShowFullImage(false)
  }

  return (
    <section id="galeria" className="section gallery reveal-on-scroll fade-up">
      <div className="container">
        <h2 className="section-title" id="galeria-de-imagenes">Galería de Imágenes</h2>
        <p className="section-subtitle">
        Explorá nuestras cabañas y el paisaje serrano que las acompaña
        </p>
        
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ color: activeCategory === category.id ? undefined : '#444' }}
            >
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              <img src={image.image} alt={image.title} className="gallery-image-real" />
              <div className="gallery-overlay">
                <h4>{image.title}</h4>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-lightbox" ref={lightboxRef}>
          <div className="lightbox-content">
            <div className="lightbox-image">
              <img 
                src={filteredImages[activeImage]?.image} 
                alt={filteredImages[activeImage]?.title} 
                className="lightbox-image-real"
                onClick={openFullImage}
                style={{ cursor: 'pointer' }}
              />
            </div>
            
            <div className="lightbox-info">
              <h3>{filteredImages[activeImage]?.title}</h3>
              <p>{filteredImages[activeImage]?.description}</p>
            </div>
            
            <div className="lightbox-nav">
              <button 
                className="nav-btn"
                onClick={() => setActiveImage(activeImage > 0 ? activeImage - 1 : filteredImages.length - 1)}
              >
                ‹
              </button>
              <div className="image-counter">
                {activeImage + 1} / {filteredImages.length}
              </div>
              <button 
                className="nav-btn"
                onClick={() => setActiveImage(activeImage < filteredImages.length - 1 ? activeImage + 1 : 0)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
        
        {showFullImage && (
          <div className="full-image-overlay" onClick={closeFullImage}>
            <div className="full-image-content" onClick={(e) => e.stopPropagation()}>
              <button className="full-image-close" onClick={closeFullImage}>×</button>
              <img 
                src={filteredImages[activeImage]?.image} 
                alt={filteredImages[activeImage]?.title} 
                className="full-image"
              />
              <div className="full-image-info">
                <h3>{filteredImages[activeImage]?.title}</h3>
                <p>{filteredImages[activeImage]?.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery 