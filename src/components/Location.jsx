import React from 'react'
import './Location.css'

const Location = () => {
  const handleMaps = () => {
    const mapsUrl = `https://www.google.com.ar/maps/place/Caba%C3%B1as+Las+Casonas/@-32.6948153,-64.7199424,638m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95d25d5fe8adbcd9:0x6677da1793d937c!8m2!3d-32.6948198!4d-64.7173675!16s%2Fg%2F11ggr81gm0?hl=es&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D`
    window.open(mapsUrl, '_blank')
  }

  return (
    <section id="ubicacion" className="section location reveal-on-scroll fade-up">
      <div className="container">
        <h2 className="section-title" id="nuestra-ubicacion">Nuestra Ubicación</h2>
        
        <div className="location-content">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.1234567890123!2d-64.7173675!3d-32.6948198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d25d5fe8adbcd9%3A0x6677da1793d937c!2sCaba%C3%B1as%20Las%20Casonas!5e0!3m2!1ses!2sar!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 'none' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cabañas Las Casonas"
            ></iframe>
          </div>
          <button onClick={handleMaps} className="map-btn">
            Ver en Google Maps
          </button>
        </div>
      </div>
    </section>
  )
}

export default Location 