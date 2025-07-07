import React from 'react'
import './About.css'
import fachadaNoche from '../assets/fachadaNoche.jpg'
import fachadaNoche2 from '../assets/fachadaNoche2.jpg'
import fachada1 from '../assets/fachada1.jpg'
import balcon from '../assets/balcon.jpg'
import alpaCorral from '../assets/alpaCorral.avif'
import florero from '../assets/florero.jpg'

const infoCards = [
  {
    icon: 'fa-water',
    title: 'A 100 m del río',
    text: 'Disfrutá el río de Alpa Corral a pasos de tu cabaña.'
  },
  {
    icon: 'fa-bed',
    title: 'Cabañas equipadas',
    text: 'Para 4 a 6 personas, con todo lo necesario para tu estadía.'
  },
  {
    icon: 'fa-users',
    title: 'Ambiente familiar',
    text: 'Un entorno cálido y seguro para toda la familia.'
  },
  {
    icon: 'fa-map-marker-alt',
    title: 'Ubicación ideal',
    text: 'Frente al polideportivo y a 200 m del centro.'
  }
]

const About = () => {
  return (
    <section id="nosotros" className="section about reveal-on-scroll fade-up">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <p className="section-subtitle">
          Disfrutá de la naturaleza en nuestras cabañas coloniales con el confort que merecés
        </p>
        <div className="about-main">
          <div className="about-collage-block">
            <div className="about-collage-grid">
              <img src={florero} alt="Florero" className="about-collage-img about-collage-img1" />
              <img src={fachada1} alt="Fachada día" className="about-collage-img about-collage-img2" />
              <img src={balcon} alt="Balcón" className="about-collage-img about-collage-img3" />
              <img src={alpaCorral} alt="Alpa Corral" className="about-collage-img about-collage-img4" />
            </div>
          </div>
          <div className="about-text-block">
            <p className="about-main-text">
              Ubicadas en el corazón de Alpa Corral, nuestras cabañas nacen del deseo de compartir un estilo de vida tranquilo, donde el tiempo se vive sin apuros y la naturaleza invita al descanso.<br/><br/>
              En Cabañas Las Casonas te ofrecemos un espacio pensado para que disfrutes en familia: un predio de 1000 m² con dos cabañas amplias, totalmente equipadas, rodeadas de verde, a pasos del río y a metros del centro del pueblo.<br/><br/>
              Cada rincón está preparado para que te sientas como en casa, rodeado de la paz serrana y la calidez de un entorno familiar.
            </p>
          </div>
        </div>
        <div className="about-cards-wide">
          {infoCards.map((card, idx) => (
            <div className="about-info-card" key={idx}>
              <div className={`about-info-icon fa-solid ${card.icon}`}></div>
              <div className="about-info-content">
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 