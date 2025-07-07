import React from 'react'
import './About.css'
import aboutImage from '../assets/fachadaNoche.jpg'

const About = () => {
  return (
    <section id="nosotros" className="section about">
      <div className="container">
        <h2 className="section-title">Nuestra Historia</h2>
        <p className="section-subtitle">
          Disfruta de la naturaleza en nuestras cabañas coloniales con el confort que merecés
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-story">
              <h3>Un Sueño en las Montañas</h3>
              <p>
                Las Casonas nació del sueño de crear un refugio donde las familias 
                pudieran desconectarse del mundo moderno y reconectarse con la naturaleza. 
                Construidas con materiales locales y técnicas tradicionales, nuestras 
                cabañas combinan el encanto rústico con las comodidades modernas.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-number">25+</div>
                <div className="feature-text">
                  <h4>Años de Experiencia</h4>
                  <p>Sirviendo a familias desde 1998</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-number">100%</div>
                <div className="feature-text">
                  <h4>Naturaleza Pura</h4>
                  <p>Rodeadas de bosques nativos</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-number">24/7</div>
                <div className="feature-text">
                  <h4>Atención Personalizada</h4>
                  <p>Estamos aquí para cuidarte</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src={aboutImage} alt="Las Casonas de noche" className="about-image-real" />
          </div>
        </div>
        
        <div className="about-values">
          <div className="value-card">
            <div className="value-icon">🌿</div>
            <h4>Sostenibilidad</h4>
            <p>Comprometidos con el cuidado del medio ambiente y la preservación de la naturaleza local.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">👨‍👩‍👧‍👦</div>
            <h4>Familia</h4>
            <p>Un lugar perfecto para crear recuerdos inolvidables con tus seres queridos.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">🏔️</div>
            <h4>Aventura</h4>
            <p>Explora senderos, observa la vida silvestre y disfruta de actividades al aire libre.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 