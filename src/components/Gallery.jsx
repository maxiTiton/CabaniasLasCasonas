import React, { useState, useRef, useEffect } from 'react'
import './Gallery.css'
import { useGalleryAnimation } from '../hooks'

const fachada1 = '/images/fachada1.jpg'
const fachada2 = '/images/fachada2.jpg'
const fachada3 = '/images/fachada3.jpg'
const fachada4 = '/images/fachada4.jpg'
const habitacionGrande = '/images/habitacionGrande.jpg'
const habitacionChica = '/images/habitacionChica.jpg'
const habitacionArriba = '/images/habitacionArriba.jpg'
const cocina = '/images/cocina.jpg'
const comedor = '/images/comedor.jpg'
const baño = '/images/baño.jpg'
const hogar = '/images/hogar.jpg'
const balcon = '/images/balcon.jpg'
const asador = '/images/asador.jpg'
const cochera = '/images/cochera.jpg'
const baños2 = '/images/baños2.jpg'
const baños = '/images/baños.jpg'
const ventanas = '/images/ventanas.jpg'
const cochera2 = '/images/cochera2.jpg'
const fachadaNoche2 = '/images/fachadaNoche2.jpg'
const fachadaNoche = '/images/fachadaNoche.jpg'
const cocheras = '/images/cocheras.jpg'
const grande = '/images/grande.jpg'
const habitacionArriba2 = '/images/habitacionArriba2.jpg'
const puerta = '/images/puerta.jpg'
const tele = '/images/tele.jpg'
const cocina2 = '/images/cocina2.jpg'
const comedor3 = '/images/comedor3.jpg'
const cama2 = '/images/cama2.jpg'
const cama = '/images/cama.jpg'
const camasGrande = '/images/camasGrande.jpg'
const cafe = '/images/cafe.jpg'
const estante = '/images/estante.jpg'
const luces = '/images/luces.jpg'
const florero = '/images/florero.jpg'
const baño7 = '/images/baño7.jpg'
const camaMatrimonial = '/images/camaMatrimonial.jpg'
const baño6 = '/images/baño6.jpg'
const baño5 = '/images/baño5.jpg'
const baño4 = '/images/baño4.jpg'
const baño3 = '/images/baño3.jpg'
const baño2 = '/images/baño2.jpg'
const ducha = '/images/ducha.jpg'
const comedor2 = '/images/comedor2.jpg'
const frente = '/images/frente.jpg'

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const lightboxRef = useRef(null)
  const modalRef = useRef(null)

  const images = [
    {
      id: 1,
      title: "Balcón",
      description: "Con vista al parque",
      category: "exterior",
      image: fachada1
    },
    {
      id: 2,
      title: "Habitación Matrimonial",
      description: "Dormitorio espacioso con cama matrimonial y vista al parque",
      category: "interior",
      image: camaMatrimonial
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
      description: "Terraza con vistas al parque",
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
      title: "Camas planta baja",
      description: "Dormitorio espacioso para 2 personas",
      category: "interior",
      image: habitacionGrande
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
      title: "Estacionamiento",
      description: "Cochera cubierta para tu vehículo",
      category: "exterior",
      image: cochera
    }
  ]

  // Array completo con todas las imágenes para los filtros Interior y Exterior
  const allImagesWithData = [
    { id: 1, title: "Balcón", description: "Con vista al parque", category: "exterior", image: fachada1 },
    { id: 2, title: "Habitación Matrimonial", description: "Dormitorio espacioso con cama matrimonial y vista al parque", category: "interior", image: camaMatrimonial },
    { id: 3, title: "Cocina Equipada", description: "Cocina completa con todos los utensilios necesarios", category: "interior", image: cocina },
    { id: 4, title: "Sala de Estar", description: "Ambiente cálido y acogedor con chimenea", category: "interior", image: hogar },
    { id: 5, title: "Comedor", description: "Área de comedor con vista panorámica", category: "interior", image: comedor },
    { id: 6, title: "Baño Principal", description: "Baño completo con ducha y amenities", category: "interior", image: baño },
    { id: 7, title: "Balcón", description: "Terraza con vistas al parque", category: "exterior", image: balcon },
    { id: 8, title: "Área de Parrilla", description: "Asador al aire libre para disfrutar al aire libre", category: "exterior", image: asador },
    { id: 9, title: "Camas planta baja", description: "Dormitorio espacioso para 2 personas", category: "interior", image: habitacionGrande },
    { id: 10, title: "Fachada Lateral", description: "Vista lateral de Casona Chica", category: "exterior", image: fachada2 },
    { id: 11, title: "Habitación Superior", description: "Dormitorio en planta alta con ambiente íntimo", category: "interior", image: habitacionArriba },
    { id: 12, title: "Estacionamiento", description: "Cochera cubierta para tu vehículo", category: "exterior", image: cochera },
    { id: 13, title: "Fachada Lateral", description: "Vista lateral de Casona Grande", category: "exterior", image: fachada3 },
    { id: 14, title: "Fachada Frontal", description: "Vista principal de las cabañas", category: "exterior", image: fachada4 },
    { id: 15, title: "Noche Estrellada", description: "Ambiente nocturno serrano", category: "exterior", image: fachadaNoche },
    { id: 16, title: "Atardecer", description: "Vista al atardecer desde las cabañas", category: "exterior", image: fachadaNoche2 },
    { id: 17, title: "Frente Principal", description: "Entrada principal al complejo", category: "exterior", image: frente },
    { id: 18, title: "Cochera Múltiple", description: "Estacionamiento para varios vehículos", category: "exterior", image: cocheras },
    { id: 19, title: "Cochera Individual", description: "Estacionamiento privado", category: "exterior", image: cochera2 },
    { id: 20, title: "Comedor", category: "interior", image: comedor2 },
    { id: 21, title: "Comedor Familiar", description: "Espacio para comidas en familia", category: "interior", image: comedor3 },
    { id: 22, title: "Cocina Moderna", description: "Cocina con electrodomésticos", category: "interior", image: cocina2 },
    { id: 23, title: "Habitación/Sala de estar", category: "interior", image: habitacionChica },
    { id: 24, title: "Habitación Alta", description: "Dormitorio con vista elevada", category: "interior", image: habitacionArriba2 },
    { id: 25, title: "Sala Grande", description: "Espacio de estar amplio", category: "interior", image: grande },
    { id: 26, category: "interior", image: cama },
    { id: 27, category: "interior", image: cama2 },
    { id: 28, title: "Camas Múltiples", description: "Dormitorio con varias camas", category: "interior", image: camasGrande },
    { id: 29, title: "Baño", description: "Baño con antebaño", category: "interior", image: baños },
    { id: 30, title: "Baño", category: "interior", image: baños2 },
    { id: 31, title: "Baño", category: "interior", image: baño2 },
    { id: 32, title: "Baño Moderno", description: "Baño con diseño moderno", category: "interior", image: baño3 },
    { id: 33, title: "Baño", category: "interior", image: baño4 },
    { id: 34, title: "Baño Funcional", description: "Baño práctico y funcional", category: "interior", image: baño5 },
    { id: 35, title: "Baño Completo", description: "Baño con todos los servicios", category: "general", image: baño6 },
    { id: 42, category: "interior", image: estante },
    { id: 36, title: "Baño", category: "interior", image: baño7 },
    { id: 43, category: "interior", image: florero },
    { id: 37, title: "Ducha Moderna", description: "Ducha con diseño contemporáneo", category: "interior", image: ducha },
    { id: 38, title: "Puerta Principal", description: "Entrada principal a la cabaña", category: "interior", image: puerta },
    { id: 39, title: "Televisión", description: "Área de entretenimiento con TV", category: "interior", image: tele },
    { id: 40, category: "interior", image: ventanas },
    { id: 41, category: "interior", image: cafe },
  ]

  const categories = [
    { id: 'some', name: 'Algunas' },
    { id: 'interior', name: 'Interior' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'all', name: 'Todas' }
  ]

  const [activeCategory, setActiveCategory] = useState('some')

  // Reset activeImage when category changes
  useEffect(() => {
    setActiveImage(0)
  }, [activeCategory])

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
      : allImagesWithData.filter(img => img.category === activeCategory)

  
    // Ensure activeImage is always valid
  useEffect(() => {
    if (activeImage >= filteredImages.length) {
      setActiveImage(0)
    }
  }, [filteredImages, activeImage])

  // Hook para animaciones dinámicas al cambiar filtro
  useGalleryAnimation(filteredImages)


  const handleImageClick = (index) => {
    setActiveImage(index)
    // Hacer scroll suave hasta el carrusel con offset hacia arriba
    setTimeout(() => {
      const lightboxElement = lightboxRef.current
      if (lightboxElement) {
        const rect = lightboxElement.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementHeight = rect.height
        const scrollOffset = rect.top + (elementHeight / 2) - (windowHeight / 2) - 30 // 30px hacia arriba
        window.scrollBy({
          top: scrollOffset,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // When modal opens, prevent background scrolling and focus modal
  useEffect(() => {
    const body = document.body
    if (isModalOpen) {
      // lock scroll
      body.style.overflow = 'hidden'
      // focus modal content shortly after render
      setTimeout(() => {
        modalRef.current?.focus()
      }, 50)
    } else {
      body.style.overflow = ''
    }
    return () => { body.style.overflow = '' }
  }, [isModalOpen])



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
        
        <div className="gallery-grid" key={`gallery-${activeCategory}`}>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item reveal-on-scroll fade-up" 
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
                onClick={() => setIsModalOpen(true)}
              />
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
        {isModalOpen && (
          <div className="image-modal" role="dialog" aria-modal="true">
            <div className="image-modal-content" ref={modalRef} tabIndex={-1}>
              <button className="modal-close" aria-label="Cerrar" onClick={closeModal}>×</button>
              <img
                src={filteredImages[activeImage]?.image}
                alt={filteredImages[activeImage]?.title}
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery 